import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiRequests } from "../api"
import { User } from "../api/dtos"
import { RequestStatus } from "../common/request-status"
import { config } from "../config/configuration"
import { storageUtil } from "../utils"
import { loginAsync } from "./auth-slice"
import { RootState } from "../app/store/store"

export interface UserState {
  user?: User
  error?: string
  registerError?: string
  status: RequestStatus
}

const initialState: UserState = {
  user: (storageUtil.get<User>(config.storage.USER_KEY) as User) ?? undefined,
  status: RequestStatus.Idle,
}

export const getUserAsync = createAsyncThunk('user/getUser', async (): Promise<User> => {
  const response = await apiRequests.getUserInfo()
  storageUtil.set(config.storage.USER_KEY, response)
  return response
})

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (
    {
    username,
    email,
    password,
    }: {
      username: string
      email: string
      password: string
    },
    { dispatch, rejectWithValue },
  ) => {
    const response = await apiRequests.register({ username, email, password })
    if (response) {
      dispatch(loginAsync({ username: username, password: password }))
    }
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, state => {
        state.status = RequestStatus.Loading
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = RequestStatus.Idle
        state.user = action.payload
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = RequestStatus.Failed
      })
      .addCase(registerAsync.pending, (state, action) => {
        state.status = RequestStatus.Loading
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.registerError = action.error.message
        state.status = RequestStatus.Failed
      })
  },
})

export const selectUserState = (state: RootState) => state.user
export const userReducer = userSlice.reducer
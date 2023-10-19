import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiRequests } from "../api"
import { RequestStatus } from "../common/request-status"
import { config } from "../config/configuration"
import { storageUtil } from "../utils"
import { RootState } from "../app/store/store"
import { getUserAsync } from "./user-slice"

export interface AuthState {
  error?: string
  status: RequestStatus
}

const initialState: AuthState = {
  status: RequestStatus.Idle,
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (
    {
      username,
      password,
    }: {
      username: string
      password: string
    },
    { dispatch },
  ) => {
    const response = await apiRequests.login({ username, password })

    storageUtil.set(config.storage.TOKEN_KEY, response.token)
    storageUtil.set(config.storage.REFRESH_TOKEN_KEY, response.refreshToken)
    dispatch(getUserAsync())
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {

      state.status = RequestStatus.Idle
      state.error = undefined
      storageUtil.clear()
      window.location.href = '/'
    },
  },

  extraReducers: builder => {
    builder
     
      .addCase(loginAsync.pending, state => {
        state.status = RequestStatus.Loading
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.error.message
        state.status = RequestStatus.Failed
      })
  },
})

export const { logout } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth

export const authReducer = authSlice.reducer
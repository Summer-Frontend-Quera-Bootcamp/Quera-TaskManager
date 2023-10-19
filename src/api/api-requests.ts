import { LoginRequest, RegisterRequest, TokenRespone, User } from './dtos'
import { axiosInstance } from './network-instance'
import { ApiResponse } from './types'
import { RequestConfig } from "./types/request-config"
const baseUrl = "https://quera.iran.liara.run/";
const login = async (loginRequest: LoginRequest, config?: RequestConfig): Promise<TokenRespone> => {
  const apiResponse = await axiosInstance.post<LoginRequest, ApiResponse<TokenRespone>>(
    baseUrl + "accounts/login/",
    loginRequest,
    config,
  )
  return apiResponse.data!
}

const register = async (registerRequest: RegisterRequest, config?: RequestConfig): Promise<User> => {
  const apiResponse = await axiosInstance.post<RegisterRequest, ApiResponse<User>>(
    baseUrl + "accounts/",
    registerRequest,
    config,
  )
  return apiResponse.data!
}

const getUserInfo = async (config?: RequestConfig): Promise<User> => {
  const axiosResponse = await axiosInstance.get<never, ApiResponse<User>>(baseUrl + `accounts/id`, config)
  return axiosResponse.data!
}

export const apiRequests = {
  login,
  register,
  getUserInfo,
} as const
import { TokenRequest,TokenRespone } from "../dtos";
import { ApiResponse } from "../types";
import axios, { AxiosHeaders } from "axios";
import { config } from "../../config/configuration";
import { storageUtil } from "../../utils";
import { HttpStatusCode } from "axios";
type CustomHeaders = AxiosHeaders & {
    authorization: string;
  };
  
export const axiosInstance = axios.create({
    baseURL: config.api.API_URL,
    timeout: config.api.TIMEOUT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    validateStatus: status => status >= HttpStatusCode.Ok && status < HttpStatusCode.BadRequest,
  })
    axiosInstance.interceptors.request.use(
    async axiosConfig => {
      const token = storageUtil.get(config.storage.TOKEN_KEY)
  
      if (token) {
        axiosConfig.headers = {
            ...axiosConfig.headers,
            authorization: `Bearer ${token}`,
          } as CustomHeaders;
          
      }
  
      return axiosConfig
    },
    error => {
      throw error
    },
  )

  axiosInstance.interceptors.response.use(
    async response => {
      if (!response.data?.success || !response.data?.data) {
        throw Error(response.data?.error || 'something went wrong')
      }
      return response.data
    },
    async error => {
      error.message = error.response?.data?.error ?? error.message
      throw error
    },
  )
  
  let isRetryInProgress = false
  axiosInstance.interceptors.response.use(
    async response => response,
    async error => {
      const axiosConfig = error?.config
  
      if (error?.response?.status === HttpStatusCode.Unauthorized && !axiosConfig?.didRetry && !isRetryInProgress) {
        axiosConfig.didRetry = true
        isRetryInProgress = true
  
        try {
          const result = await refreshTokensAndSave()
          if (result?.token) {
            axiosConfig.headers = {
              ...axiosConfig.headers,
              authorization: `Bearer ${result?.token}`,
            }
          }
          return axios(axiosConfig)
        } catch {
          storageUtil.clear()
          if (!['/login', '/register'].includes(window.location.pathname)) {
            window.location.href = '/login'
          }
        } finally {
          isRetryInProgress = false
        }
      }
  
      if (isRetryInProgress) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(axios(axiosConfig))
          }, 100)
        })
      }
  
      error.message = error.response?.data?.error ?? error.message
      throw error
    },
  )
  
  const fetchNewTokens = async (refreshToken: string): Promise<TokenRespone> => {
    const body: TokenRequest = {
      refreshToken: refreshToken,
    }
  
    const response = await axiosInstance.post<ApiResponse<TokenRespone>>('/auth/token', body)
    if (response.status >= HttpStatusCode.BadRequest || !response.data?.sucscess || !response.data?.data) {
      throw new Error('No token received from server')
    }
  
    return response.data.data
  }
  
  const refreshTokensAndSave = async (): Promise<TokenRespone> => {
    const refreshToken = storageUtil.get(config.storage.REFRESH_TOKEN_KEY)
    if (!refreshToken) {
      throw new Error('No refresh token in storage')
    }
    const newTokens = await fetchNewTokens(refreshToken)
    storageUtil.set(config.storage.REFRESH_TOKEN_KEY, newTokens.refreshToken)
    storageUtil.set(config.storage.TOKEN_KEY, newTokens.token)
    return newTokens
  }
import axios from "axios";
import { authTokenUpdate, logOut } from "../auth/authSlice/authSlice";
import store from "../store";

let authToken = JSON.parse(localStorage.getItem("authToken") || "null");
const baseURL = "https://quera.iran.liara.run/";
const  ApiCall= axios.create({ baseURL });

ApiCall.interceptors.request.use(
  async (config) => {
    if (authToken?.access) {
      config.headers['Authorization'] = `Bearer ${authToken.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

ApiCall.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const orgCall = error.config;
    if (error.response.status === 401 && orgCall.url.endsWith("/refresh")) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !orgCall._retry) {
      orgCall._retry = true;
      try {
        const token = JSON.parse(localStorage.getItem("authToken") || "{}");
        const response = await axios.post(`${baseURL}accounts/refresh/`, {
          refresh: token.refresh,
        });
        const { access: newAccessToken, refresh: currentRefreshToken } = response.data;
        authToken = { access: newAccessToken, refresh: currentRefreshToken };
        localStorage.setItem("authToken", JSON.stringify(authToken));
        store.dispatch(authTokenUpdate(authToken));
        ApiCall.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        return ApiCall(orgCall);
      } catch (refreshError) {
        store.dispatch(logOut());
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default ApiCall;

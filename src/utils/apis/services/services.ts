import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import cookie from "cookie";
import { toast } from "react-toastify";
import { IApi, responseRefresh } from "./services.types";

export const getCookieValue = (): Record<string, string> | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const valuesCookie = cookie.parse(document.cookie);

  return valuesCookie;
};

// Create Axios Instance
export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use((req) => {
    const valuesCookie = getCookieValue() || {};
    const userInfo = valuesCookie?.userInfo
      ? JSON.parse(valuesCookie.userInfo)
      : {};

    req.headers.Authorization = valuesCookie.token
      ? `Bearer ${valuesCookie.token}`
      : "";

    return req;
  });

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      return response;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const valuesCookie = getCookieValue() || {};

          try {
            const res: responseRefresh = await axios.post(
              "https://taskapi.hiweb.ir/api/Security/UserLogin/RefreshToken",
              {
                refresh: valuesCookie.refresh,
              }
            );
            document.cookie = cookie.serialize("token", "");
            document.cookie = cookie.serialize("token", res.data.access);

            // Set the new token in the header
            instance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.access}`;

            return instance(originalConfig);
          } catch (_error) {
            // Delete the expired token
            document.cookie = cookie.serialize("token", "", {
              expires: new Date(0),
            });

            toast.error("لطفا دوباره وارد شوید");
            // Redirecting the user to the landing page
            window.location.href = window.location.origin;
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

export class Api implements IApi {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly axios: AxiosInstance) {}
  get<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(url, config);
  }
  post<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(url, body, config);
  }
  delete<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(url, config);
  }
  put<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(url, body, config);
  }
  patch<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.patch<T>(url, body, config);
  }

  defaults = this.axios.defaults;
}

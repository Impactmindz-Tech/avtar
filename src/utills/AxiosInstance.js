import axios from "axios";
import { getLocalStorage } from "./LocalStorageUtills";

const axiosInstance = axios.create({
  baseURL: "https://avatar-backend.vercel.app",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
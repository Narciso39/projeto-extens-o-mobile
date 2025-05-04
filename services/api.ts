
import { store } from "@/store/store";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-projeto-extensao.vercel.app/api/",
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().rootAuth;

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);

    if (error.response?.status === 401) {
      console.log("Token expirado ou inválido");
    }

    return Promise.reject(error);
  }
);

export default api;

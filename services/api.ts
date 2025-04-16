import axios from "axios";

const api = axios.create({
  baseURL: "https://api-projeto-extensao.vercel.app/api/",
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
import axios from "axios";
import { API_ENDPOINT } from "../utils/constant";

const apiService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {
  const token: string = import.meta.env.VITE_CAT_API_KEY;
  if (token) {
    config.headers["x-api-key"] = token;
  }
  return config;
});

export { apiService };

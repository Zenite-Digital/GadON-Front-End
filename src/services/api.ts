import axios from "axios";

const EXPO_PUBLIC_BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

const api = axios.create({
  baseURL: EXPO_PUBLIC_BACKEND_URL,
  timeout: 50000,
});

export default api;

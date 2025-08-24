import axios from "axios";
import Constants from "expo-constants";

const expoExtra =
  (Constants.expoConfig && (Constants.expoConfig.extra as any)) || {};
const BACKEND_URL =
  expoExtra.BACKEND_URL ?? process.env.BACKEND_URL ?? "http://localhost:3030";

console.log("BACKEND_URL", BACKEND_URL);

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
});

export default api;

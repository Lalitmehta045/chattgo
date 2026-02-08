import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://10.76.30.15:3000/api" : "/api",
  withCredentials: true,
});

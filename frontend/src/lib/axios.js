import axios from "axios";

// TODO: Update this URL to your deployed backend URL (e.g., Render, Railway)
// Example: "https://your-backend.onrender.com/api"
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://10.76.30.15:3000/api" : "/api",
  withCredentials: true,
});

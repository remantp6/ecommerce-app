import axios from "axios";

// Create an Axios instance with a base URL and default headers
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
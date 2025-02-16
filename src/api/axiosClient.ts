// api/axiosClient.ts
import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
      // Handle specific error cases here
      if (error.response.status === 401) {
        // Handle unauthorized
        console.log('Unauthorized access');
      }
    }
    return Promise.reject(error);
  }
);

export { axiosClient };

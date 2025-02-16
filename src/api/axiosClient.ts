// api/axiosClient.ts
import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'User-Type': 'guest',
  },
  withCredentials: false,
});

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

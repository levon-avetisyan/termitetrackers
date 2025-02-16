import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

axiosClient.interceptors.request.use((config) => {
  const userType = sessionStorage.getItem('userType') || 'guest';
  config.headers['User-Type'] = userType;
  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
    }
    return Promise.reject(error);
  }
);

export { axiosClient };

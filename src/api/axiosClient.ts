import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json', // Add this line
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const userType = sessionStorage.getItem('userType') || 'guest';
  config.headers['User-Type'] = userType;
  axiosClient.defaults.headers.common['User-Type'] = userType;
  return config;
});

export { axiosClient };

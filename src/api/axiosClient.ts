import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GHL_API_URL as string, // API base URL
  headers: {
    Version: '2021-07-28',
    Authorization: `Bearer ${import.meta.env.VITE_GHL_ACCESS_TOKEN as string}`,
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;

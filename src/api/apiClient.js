import axios from 'axios';
import { getToken } from './token';

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { statusCode } = response.data;

    if (statusCode >= 400) {
      const error = new Error(`Request failed with status code ${statusCode}`);
      error.response = { ...response, status: statusCode };
      return Promise.reject(error);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

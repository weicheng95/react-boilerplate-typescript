/* eslint-disable no-param-reassign */
import axios from 'axios';

import { USER_TOKEN } from './constants';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://192.168.0.225:8000/api',
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // get token from localstorage
    const token = localStorage.getItem(USER_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err),
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (err) => Promise.reject(err),
);

export default axiosInstance;

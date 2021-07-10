import axiosInstance from 'services/axios-config';
import { LoginRequest } from 'types/auth';

export const userLogin = (data: LoginRequest) => {
  return axiosInstance.post<API.Login>('/auth/login', data);
}

// export const userRegister = () => axiosInstance.get('/auth/register');

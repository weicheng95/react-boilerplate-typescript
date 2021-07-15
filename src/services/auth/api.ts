import axiosInstance from 'services/axios-config';
import { GuessLoginRequest } from 'types/auth';
import { Order } from 'types/order';

export const guessLogin = (data: GuessLoginRequest) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axiosInstance.post<Order>('/shopee/order', data);

export const userRegister = () => axiosInstance.get('/auth/register');

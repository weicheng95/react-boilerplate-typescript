import axiosInstance from 'services/axios-config';
import { ProductAccount } from 'types/auth';
import { GenerateAccount } from 'types/order';

export const generateFoodpandaAccount = (data: GenerateAccount) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axiosInstance.post<ProductAccount>('/shopee/account/foodpanda', data);

export const userRegister = () => axiosInstance.get('/auth/register');

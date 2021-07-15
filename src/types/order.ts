import { Product } from './product';

export type Order = {
  id: string;
  ordersn: string;
  userName: string;
  products?: Product[];
  username: string;
};

export type GenerateAccount = {
  orderId: string;
  product: string;
};

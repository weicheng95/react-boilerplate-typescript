import { ProductAccount } from './auth';

export type Product = {
  left: number;
  name: string;
  accounts: ProductAccount[];
};

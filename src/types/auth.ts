export type GuessLoginRequest = {
  ordersn: string;
  username: string;
};

export type ProductAccount = {
  status?: string;
  retry?: number;
  // eslint-disable-next-line camelcase
  create_at?: Date;
  email?: string;
  password?: string;
};

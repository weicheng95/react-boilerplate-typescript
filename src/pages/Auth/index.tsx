// eslint-disable-next-line no-use-before-define
import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useReducer,
} from 'react';

import { Order } from 'types/order';

import Reducer from './reducer';

export interface OrderState {
  order?: Order;
  error?: any;
}

export interface Store {
  state: OrderState;
  dispatch: React.Dispatch<any>;
}

const initialState: {
  order?: Order,
  error?: any,
} = {
  order: undefined,
  error: null,
};

// export const OrderContext = createContext(initialState);

export const OrderContext = createContext<Store>({ state: initialState, dispatch: () => null });

const OrderStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderStore;

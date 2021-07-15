const Reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        order: action.payload,
      };
    case 'SET_ORDER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

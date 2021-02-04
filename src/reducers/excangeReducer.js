import { FETCH_EXCHANGE } from "../actions/actionExchange";

const initialState = {
  exchangeData: {},
};

export const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE:
      return { ...state, exchangeData: action.payload };
    default:
      return state;
  }
};

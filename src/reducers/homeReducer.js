import { FETCH_LOCATION } from "../actions/actionLocation";
const initialState = {
  location: {},
  error: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      console.log("action este = ", action.payload);
      return { ...state, location: action.payload };

    default:
      return state;
  }
};

import { FETCH_LOCATION } from "../actions/actionLocation";
const initialState = {
  location: {},
  error: "",
};

export const homeReducer = (state = initialState, action) => {
  console.log("action este = ", action.payload);
  switch (action.type) {
    case FETCH_LOCATION:
      return { ...state, location: action.payload };

    default:
      return state;
  }
};

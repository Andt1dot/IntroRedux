import {FETCH_LOCATION } from "../actions/actionLocation";


const initialState = {
  location: {},
  error: "",
  flag: ""
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {

     case FETCH_LOCATION: return { ...state, location: action.payload };
    
     default:
      return state;
  }
};







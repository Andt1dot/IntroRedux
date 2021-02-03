import {FETCH_METEO} from "../actions/actionMeteo"


const initialState = {
   meteo: {},
   error: ''
}



export const meteoReducer = (state = initialState, action) => {
  
    console.log('action este =',action.type)
    switch (action.type) {
  
       case FETCH_METEO: return { ...state, meteo: action.payload };
      
       default:
        return state;
    }
  };
  
  
  
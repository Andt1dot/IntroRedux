const initialState = {
  location: {},
  error: "",
};

export const homeReducer = (state = initialState, action) => {

  console.log('action este = ',action.type)
  switch (action.type) {
   // case FETCH_LOCATION: return {...state, action.} 
   
     default:
      return state;
  }
};

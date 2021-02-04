import { fetchLocation } from "./actionLocation";
export const FETCH_METEO = "FETCH_METEO";

export const fetchMeteo = (query) => (dispatch, getState) => {
  console.log(dispatch);
  console.log(fetchLocation());

  const state = getState();

  Object.keys(state.homeReducer.location).length === 0
    ? console.log("state is empty")
    : console.log("state", state.homeReducer.location);

  //state.
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${"chisinau"}&appid=60863f88c34e274c330b04f9cdd90e7d&units=metric`
  )
    .then((res) => res.json())
    .then((meteo) => {
      dispatch({
        type: FETCH_METEO,
        payload: meteo,
      });
    });
};

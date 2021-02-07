import { fetchLocation } from "./actionLocation";

export const FETCH_METEO = "FETCH_METEO";

export const fetchMeteo = (query) => async (dispatch, getState) => {
  const state = getState();
  let { city } = state.homeReducer.location;

  if (!city) {
    const { city: foundCity } = await fetch(
      "http://ip-api.com/json/?fields=61439"
    ).then((res) => res.json());
    city = foundCity;
  }

  console.log("city", city);

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60863f88c34e274c330b04f9cdd90e7d&units=metric`
  )
    .then((res) => res.json())
    .then((meteo) => {
      dispatch({
        type: FETCH_METEO,
        payload: meteo,
      });
    });
};

export const FETCH_METEO = "FETCH_METEO";

export const fetchMeteo = () => async (dispatch, getState) => {
  const state = getState();
  let { city } = state.homeReducer.location;
  if (!city) {
    const { city: foundCity } = await fetch(
      "https://ipapi.co/json?__cf_chl_jschl_tk__=1e6fa49a6d7c4d3c2aff29322bcf2c9247730b27-1612966535-0-AVBfFqc9cz6WReOMeoGWhxJPSXqSbaKz9C2Rl7FnJ4xvis9jlRVyCtJn_lS0EbvTddzLlDtoVJh99kJ9lxYnr8SytKIPOWOZBL7HCgGHUHmCcsg0p9INK41pUjR1X6oFSe_OOBs_CffbJY6Y_8-c0xxnt2O9WSITxoHDNsf6s92HpXjXKNWwl1kz5pTeHYGdtug2cbcQQtwa6D7u_UZFHchw2s0lJYs5q9eAOU8_CC6RqwQTHvCjMkCuJZvDa6_FE0_H812axUsWj3dX7frcmxSt_gozbPKXXxhSESGyhtDe55DVmV5wEUUyHZ7UfhF2C_s-IdM_2SlhtjKPdvJBP3VXUyBHDJZ14EPf9oXebsnf52xFBexmaPLLXMIwYPqweQ"
    ).then((res) => res.json());
    city = foundCity;
  }

 /// console.log("city", city);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60863f88c34e274c330b04f9cdd90e7d&units=metric`
  )
    .then((res) => res.json())
    .then((meteo) => {
      dispatch({
        type: FETCH_METEO,
        payload: meteo,
      });
    });
};
export const fetchInputMeteo = (query) => async (dispatch) => {
  console.log("querry", query);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=60863f88c34e274c330b04f9cdd90e7d&units=metric`
  )
    .then((res) => res.json())
    .then((meteo) => {
      dispatch({
        type: FETCH_METEO,
        payload: meteo,
      });
    });
};

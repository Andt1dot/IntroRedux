export const FETCH_LOCATION = "FETCH_LOCATION";
export const fetchLocation = () => (dispatch) => {
  fetch(
    "https://ipapi.co/json?__cf_chl_jschl_tk__=1e6fa49a6d7c4d3c2aff29322bcf2c9247730b27-1612966535-0-AVBfFqc9cz6WReOMeoGWhxJPSXqSbaKz9C2Rl7FnJ4xvis9jlRVyCtJn_lS0EbvTddzLlDtoVJh99kJ9lxYnr8SytKIPOWOZBL7HCgGHUHmCcsg0p9INK41pUjR1X6oFSe_OOBs_CffbJY6Y_8-c0xxnt2O9WSITxoHDNsf6s92HpXjXKNWwl1kz5pTeHYGdtug2cbcQQtwa6D7u_UZFHchw2s0lJYs5q9eAOU8_CC6RqwQTHvCjMkCuJZvDa6_FE0_H812axUsWj3dX7frcmxSt_gozbPKXXxhSESGyhtDe55DVmV5wEUUyHZ7UfhF2C_s-IdM_2SlhtjKPdvJBP3VXUyBHDJZ14EPf9oXebsnf52xFBexmaPLLXMIwYPqweQ"
  )
    .then((res) => res.json())
    .then((location) => {
      dispatch({
        type: FETCH_LOCATION,
        payload: location,
      });
    });
};

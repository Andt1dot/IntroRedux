export const FETCH_EXCHANGE = "FETCH_EXCHANGE";

export const fetchExchange = () => (dispatch) => {
  fetch(
    "http://www.floatrates.com/daily/mdl.json"
  )
    .then((res) => res.json())
    .then((exchange) => {
      dispatch({
        type: FETCH_EXCHANGE,
        payload: exchange,
      });
    });
};

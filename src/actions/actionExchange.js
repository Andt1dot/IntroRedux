export const FETCH_EXCHANGE = "FETCH_EXCHANGE";


export const fetchExchange = () => (dispatch) => {
    fetch("///https://v6.exchangerate-api.com/v6/3f719d9de282b750dbabfe45/latest/MDL")
    .then((res) => res.json())
    .then((exchange) => {
      dispatch({
        type: FETCH_EXCHANGE,
        payload: exchange,
      });
    });

};













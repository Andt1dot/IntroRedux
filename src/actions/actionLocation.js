export const FETCH_LOCATION = "FETCH_LOCATION";

export const fetchLocation = () => (dispatch) => {
  fetch("http://ip-api.com/json/?fields=61439")
    .then((res) => res.json())
    .then((location) => {
      dispatch({
        type: FETCH_LOCATION,
        payload: location,
      });
    });
};

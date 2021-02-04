export const FETCH_METEO = "FETCH_METEO";


export const fetchMeteo = (query) => (dispatch) => {
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${'chisinau'}&appid=60863f88c34e274c330b04f9cdd90e7d&units=metric`)
    .then((res) => res.json())
    .then((meteo) => {
      dispatch({
        type: FETCH_METEO,
        payload: meteo,
    });
      
    });

};


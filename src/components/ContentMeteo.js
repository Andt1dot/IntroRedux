import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMeteo } from "../actions/actionMeteo";
const ContentMeteo = (props) => {
  useEffect(() => {
    props.fetchMeteo();
  }, []);

  return (
    <div>
      {Object.keys(props.meteo).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>Country: {JSON.stringify(props.meteo.sys.country)}</div>
          <div>City: {JSON.stringify(props.meteo.name)}</div>
          <div>Temp: {JSON.stringify(props.meteo.main.temp)} ℃</div>
          <div>Humidity: {JSON.stringify(props.meteo.main.humidity)}</div>
          <div>Weather: {JSON.stringify(props.meteo.weather[0].main)}</div>
        </div>
      )}
      <div>
        <label>Enter the city for meteo information</label>
        <br />
        <input></input>
        <br />
        <button>Search</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { meteo: state.meteoReducer.meteo };
};

const mapDispatchToProps = {
  fetchMeteo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentMeteo);

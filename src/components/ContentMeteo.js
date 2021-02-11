import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMeteo,fetchInputMeteo } from "../actions/actionMeteo";

const ContentMeteo = (props) => {
  useEffect(() => {
    props.fetchMeteo();
  }, []);

  console.log(
    "meteo loading",
    Object.keys(props.meteo).length === 0,
    props.meteo
  );
  const getInputData = (e) => {
    e.preventDefault();
    console.log(textinput.current.value);
    props.fetchInputMeteo(textinput.current.value);
  };
  let textinput = React.createRef();

  return (
    <div>
      {Object.keys(props.meteo).length === 0 ? (
        <h1>Loading...</h1>
      ) : props.meteo.cod === "404" || props.meteo.cod === "400" ? (
        <h3>{props.meteo.message}...</h3>
      ) : (
        <div>
          <div>Country: {JSON.stringify(props.meteo.sys.country)}</div>
          <div>City: {JSON.stringify(props.meteo.name)}</div>
          <div>Temp: {JSON.stringify(props.meteo.main.temp)} ℃</div>
          <div>Humidity: {JSON.stringify(props.meteo.main.humidity)} %</div>
          <div>Weather: {JSON.stringify(props.meteo.weather[0].main)}</div>
        </div>
      )}
      <form onSubmit={getInputData}>
        <label>Enter the city for meteo information</label>
        <br />
        <input ref={textinput}></input>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    meteo: state.meteoReducer.meteo,
  };
};

const mapDispatchToProps = {
  fetchMeteo,
  fetchInputMeteo
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentMeteo);

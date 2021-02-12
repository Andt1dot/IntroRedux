import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMeteo, fetchInputMeteo } from "../actions/actionMeteo";

const ContentMeteo = (props) => {
  useEffect(() => {
    props.fetchMeteo();
  }, []);

  const getInputData = (e) => {
    e.preventDefault();
    console.log(textinput.current.value);
    props.fetchInputMeteo(textinput.current.value);
  };
  let textinput = React.createRef();

  return (
    <div>
      {Object.keys(props.meteo).length === 0 ? (
        <h1 className="warning">Loading...</h1>
      ) : props.meteo.cod != "200" ? (
        <h3 className="warning">{props.meteo.message}...</h3>
      ) : (
        <div className="meteoData">
    
          <div>Country code: {props.meteo.sys.country}</div>
          <div>City: {props.meteo.name}</div>
          <div>Temp: {props.meteo.main.temp} ℃</div>
          <div>Humidity: {props.meteo.main.humidity} %</div>
          <div>Pressure: {props.meteo.main.pressure}</div>
          <div>Weather: {props.meteo.weather[0].main}</div>
        </div>
      )}
      <form onSubmit={getInputData}>
        <label className="inputLabel">Enter the city for meteo information ☂</label>
        <br />
        <input ref={textinput}className="input"></input>
        <br />
        <button className="inputButton" type="submit">Search</button>
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
  fetchInputMeteo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentMeteo);

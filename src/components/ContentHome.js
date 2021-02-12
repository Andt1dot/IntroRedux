import { connect } from "react-redux";
import { fetchLocation } from "../actions/actionLocation";
import { useEffect } from "react";

const ContentHome = (props) => {
  useEffect(() => {
    props.fetchLocation();
  }, []);

  return (
    <div>
      {Object.keys(props.location).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="homePageInfo">
            <div>Your country code is : {props.location.country}</div>
            <div>Now you are in : {props.location.city}</div>
          </div>
          <img
            className="homePageStema"
            src={`https://www.countryflags.io/${props.location.country_code}/shiny/64.png`}
          ></img>
          <h3 className="homePageMessage">
            Hi, we used your IP address to detect your location. This will allow
            me to provide you with country data and other weather data
          </h3>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  fetchLocation,
};
const mapStateToProps = (state) => {
  return { location: state.homeReducer.location };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome);

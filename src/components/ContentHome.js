import { connect } from "react-redux";
import { fetchLocation} from "../actions/actionLocation";



import React from "react";
const ContentHome = (props) => {
  React.useEffect(() => {
    props.fetchLocation();
  }, []); 

  return (
    <div>
      {Object.keys(props.location).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>Your country is : {JSON.stringify(props.location.country)}</div>
          <div>Your city is : {JSON.stringify(props.location)}</div>
         <img src={`https://www.countryflags.io/${props.location.countryCode}/shiny/64.png`}></img>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  fetchLocation
};
const mapStateToProps = (state) => {
  return { location: state.location};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome);

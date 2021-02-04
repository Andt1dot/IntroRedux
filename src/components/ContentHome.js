import { connect } from "react-redux";
import { fetchLocation} from "../actions/actionLocation";
import {useEffect} from 'react'


const ContentHome = (props) => {
  useEffect(() => {
    props.fetchLocation();
  }, []); 

  console.log(props);
  return (
    <div>
      {
       Object.keys(props.location).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>Your country is : {JSON.stringify(props.location.country)}</div>
          <div>Now you are in : {JSON.stringify(props.location.city)}</div>
         <img src={`https://www.countryflags.io/${props.location.countryCode}/shiny/64.png`}></img>
        </div>
      )
      }
    </div>
  );
};

const mapDispatchToProps = {
  fetchLocation
};
const mapStateToProps = (state) => {
  return { location: state.homeReducer.location};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome);

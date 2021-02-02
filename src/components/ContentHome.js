import { connect } from "react-redux";
import { fetchLocation } from "../actions/actionLocation";

const ContentHome = (props) => {
  const handleClick = (e) => {
    console.log("Accesat");
    props.testVlad();
  };
  return <div onClick={handleClick}>Your location is : = {"este"}</div>;
};

const mapDispatchToProps = {
  testVlad: fetchLocation,
};

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome);

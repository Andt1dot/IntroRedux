import { fetchExchange } from "../actions/actionExchange";
import { connect } from "react-redux";
import React from "react";

const ContentExchange = (props) => {
  React.useEffect(() => {
    props.fetchExchange();
  }, []);

  return Object.keys(props.exchangeData).length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <table className="container">
      <thead>
        <tr>
          
          <th>
            <h1>1 EUR</h1>
          </th>
          <th>
            <h1>1 USD</h1>
          </th>
          <th>
            <h1>1 RUB</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>{parseFloat(1/(props.exchangeData.eur.rate)).toFixed(2)} MDL</td>
          <td>{parseFloat(1/(props.exchangeData.usd.rate)).toFixed(2)} MDL</td>
          <td>{parseFloat(1/(props.exchangeData.rub.rate)).toFixed(2)} MDL</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapDispatchToProps = {
  fetchExchange,
};
const mapStateToProps = (state) => {
  return { exchangeData: state.exchangeReducer.exchangeData };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentExchange);

import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/fetchActions";

const Forecast = props => {
  const fetchData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      <h2>welcome</h2>
      <button onClick={fetchData}>Fetch data</button>
      {props.isFetching && <p>Fetching...</p>}
      {props.data.map(drink => {
        return (
          <>
            <p key={drink.idDrink}>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt="fancy cocktail" />
          </>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getData })(Forecast);

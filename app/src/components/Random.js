import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions/fetchActions";

import CocktailList from "./CocktailList";

const Random = props => {
  const fetchData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      <h2>Need ideas? Click to view a random drink.</h2>
      <button onClick={fetchData}>random drink</button>

      {props.isFetching && <p>Fetching...</p>}
      <CocktailList drinks={props.data} />
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

export default connect(mapStateToProps, { getData })(Random);

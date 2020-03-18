import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getData } from "../actions/fetchActions";

import CocktailList from "./CocktailList";

const Button = styled.button`
  padding: 0.5%;
  font-size: 1.5rem;
  transition: 0.3s;
  margin-bottom: 3%;

  &:hover {
    color: white;
    background: black;
  }
`;

const Random = props => {
  const fetchData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div>
      <h2>Need ideas? Click to view a random drink.</h2>
      <Button onClick={fetchData}>random drink</Button>

      {props.isFetching && <p className="fetching">Fetching...</p>}
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

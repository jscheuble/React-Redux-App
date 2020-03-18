import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin")
    .then(res => {
      console.log(res.data.drinks);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.drinks });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};

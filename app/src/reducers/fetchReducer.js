import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/fetchActions";

const initialState = {
  data: [],
  error: "",
  isFetching: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        data: [],
        isFetching: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

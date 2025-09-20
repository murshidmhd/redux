import { combineReducers } from "redux";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

function reducer(prvState = initialState, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return { ...prvState, loading: true };
    case "FETCH_SUCCESS":
      return { ...prvState, loading: false, users: action.payload };
    case "FETCH_FAILED":
      return { ...prvState, loading: false, error: action.payload };
    default:
      return prvState;
  }
}

const reduce = combineReducers({
  reducer,
});

export default reduce;


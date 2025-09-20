import { applyMiddleware, createStore } from "redux";
import reduce from "./userReducer";
import { thunk } from "redux-thunk";

const store3 = createStore(reduce, applyMiddleware(thunk));
export default store3;

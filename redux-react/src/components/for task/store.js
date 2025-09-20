// import { applyMiddleware, compose, createStore } from "redux";
// import { thunk } from "redux-thunk";

// const initialvalue = { count: 0 };
// function counterReducer(prvState = initialvalue, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: prvState.count + 1 };
//     case "DECREMENT":
//       return { count: prvState.count - 1 };
//     default:
//       return prvState;
//   }
// }
// const logger = (store) => (next) => (action) => {
//   console.log("Dispatching action ", action);

//   const result = next(action);
//   console.log("New state", store.getState());
//   return result;
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   counterReducer,
//   composeEnhancers(applyMiddleware(thunk, logger))
// );

// export default store;

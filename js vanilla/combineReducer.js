import { combineReducers, createStore } from "redux";

const initialvalue = { count: 0 };
function counter(prvState = initialvalue, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: prvState.count + 1 };
    case "DECREMENT":
      return { count: prvState.count - 1 };
    default:
      return prvState;
  }
}

const initialTodo = { list: [] };
function todo(prvState = initialTodo, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { list: [...prvState.list, action.payload] };
    case "REMOVE_TODO":
      return {
        list: prvState.list.filter((item, i) => i !== action.payload),
      };
    default:
      return prvState;
  }
}

const allReducers = combineReducers({ counter: counter, todo: todo });
const store = createStore(allReducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "ADD_TODO", payload: "hey are you happy " });
store.dispatch({ type: "DECREMENT" });

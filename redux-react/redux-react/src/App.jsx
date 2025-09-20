import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAsync } from "./components/incrementAsync";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>

      <button onClick={() => dispatch(incrementAsync())}>
        INCREMENT ASYNC
      </button>
    </div>
  );
}

export default App;

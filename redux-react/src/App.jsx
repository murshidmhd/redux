// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./components/for practice /counterSlice";

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

//     </div>
//   );
// }

// export default App;

// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "./components/for task/day4/userAction";

// function App() {
//   const { loading, users, error } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Users</h1>
//       <button onClick={() => dispatch(fetchUsers())}>Load Users</button>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchHumans from "./components/for task/day4/userAction";

function App() {
  const { loading, error, users } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchHumans());
        }}
      >
        increment
      </button>

      {loading && <p> loading...</p>}
      {error && <p>{error} </p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


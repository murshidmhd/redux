import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import store from "./components/store.js";
import { Provider } from "react-redux";
import store3 from "./components/for task/day4/store3.js";
// import store3 from "./components/for practice /storePractice.js";
// import store2 from "./components/for task/store2.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store3}>
      <App />
    </Provider>
  </StrictMode>
);

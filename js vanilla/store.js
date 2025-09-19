const store = Redux.createStore(reducer);
const initialvalue = { count: 0 };
function reducer(prvState = initialvalue, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: prvState.count + 1 };

    case "DECREMENT":
      return { count: prvState.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return prvState;
  }
}

function render() {
    const state = store.getState();
    document.getElementById("value").textContent = state.count;
}

store.subscribe(render);
render();
document.getElementById("increment").onclick = () => {
  store.dispatch({ type: "INCREMENT" });
};
document.getElementById("decrement").onclick = () => {
  store.dispatch({ type: "DECREMENT" });
};
document.getElementById("reset").onclick = () => {
  store.dispatch({ type: "RESET" });
};




const fetchHumans = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_STARTED" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_FAILURE", payload: err.message });
    }
  };
};

export default fetchHumans;

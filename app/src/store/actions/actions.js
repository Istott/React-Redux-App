import axios from "axios";

export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: "FETCH_QUOTE_START" });
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        // res.data.quote
        dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: res.data.quote });
      })
      .catch(err => console.log(err.response));
  };
};

import axios from "axios";

export const fetchJackson = () => {
  return dispatch => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get("https://rickandmortyapi.com/api/character/404")
      .then(res => {
        console.log(res)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err.response));
  };
};

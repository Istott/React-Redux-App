const initialState = {
    quote: "",
    isFetching: false,
    error: ""
  };
  
  export const jacksonReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA_START":
        return {
          ...state,
          isFetching: true
        };
      case "FETCH_DATA_SUCCESS":
        return {
          ...state,
          isFetching: false,
          quote: action.payload,
          error: ""
        };
      default:
        return state;
    }
  };
  
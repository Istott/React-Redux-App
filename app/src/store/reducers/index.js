import { combineReducers } from "redux";
import { quotesReducer as quotes } from "./rickReducer";

export default combineReducers({
  quotes
});
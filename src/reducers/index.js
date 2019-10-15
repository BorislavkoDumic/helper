import { combineReducers } from "redux";
import overlay from "./overlay";
import inputFields from "./inputFields";

const reducer = combineReducers({
  overlay,
  inputFields
});

export default reducer;

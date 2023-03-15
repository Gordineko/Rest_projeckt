import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const ActionComponent = combineReducers({
  auth: AuthReducer,
});

export default ActionComponent;

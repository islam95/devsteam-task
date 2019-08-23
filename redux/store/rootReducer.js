import { combineReducers } from "redux";
import cadastral from "../reducers/cadastral";
import nav from "../reducers/nav";

const rootReducer = combineReducers({
  cadastral,
  nav
});

export default rootReducer;

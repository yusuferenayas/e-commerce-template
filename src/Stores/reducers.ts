import {combineReducers} from "redux";
import app from "./App/slices";

// Add Reducers Here
const rootReducer = combineReducers({
  app,
});

export default rootReducer;

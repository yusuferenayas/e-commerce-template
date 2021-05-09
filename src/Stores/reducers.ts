import {combineReducers} from "redux";
import app from "./App/slices";
import product from "./Product/slices";

// Add Reducers Here
const rootReducer = combineReducers({
  app,
  product,
});

export default rootReducer;

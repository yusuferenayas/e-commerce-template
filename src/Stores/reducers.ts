import {combineReducers} from "redux";
import app from "./App/slices";
import product from "./Product/slices";
import cart from "./Cart/slices";

// Add Reducers Here
const rootReducer = combineReducers({
  app,
  product,
  cart,
});

export default rootReducer;

import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";

const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedproductReducer,
});

export default reducers;

//2. create a root reducer

import { combineReducers } from "redux";

//4. import shoppingReducer and add as shop

import shoppingReducer from "./shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer
});

export default rootReducer;

// 1. create a store
// 2. add root reducer in it

import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;

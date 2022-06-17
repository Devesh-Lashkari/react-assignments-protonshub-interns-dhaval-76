import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import parkingReducer from "./parkingReducer";

const rootReducer = combineReducers({
  parking: parkingReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

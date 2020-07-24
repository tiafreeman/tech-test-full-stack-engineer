import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import capsuleReducer from "./capsules/capsules.reducer";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  capsuleReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

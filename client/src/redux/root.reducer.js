import { combineReducers } from "redux";

import capsuleReducer from "./capsules/capsules.reducer";

const rootReducer = combineReducers({
  capsuleData: capsuleReducer,
});

export default rootReducer;

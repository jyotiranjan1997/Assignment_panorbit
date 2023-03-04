import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./Auth/AuthReducer";

const rootReducers = combineReducers({
  UserReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

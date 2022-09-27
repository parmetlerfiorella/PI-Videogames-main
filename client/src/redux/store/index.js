import { createStore, applyMiddleware } from "redux";
import { videogame_reducer } from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  videogame_reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
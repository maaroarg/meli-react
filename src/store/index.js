//Redux Stuff
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import rootReducer from "./reducers/rootReducer";

//Creamos el store en el entry point (index.js)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
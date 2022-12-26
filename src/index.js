import "./index.css";
import App from "./App";
import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import { pokemonsReducer } from "./Reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { featuring, logger, sortAlphabetic } from "./Middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, sortAlphabetic)
);

const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

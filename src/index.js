import "./index.css";
import App from "./App";
import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import { pokemonsReducer } from "./Reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(pokemonsReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

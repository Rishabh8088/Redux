import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import counterReducer from "./Store/Reducers/counter";
import resultReducer from "./Store/Reducers/result";

const logger = store => {
  return next => {
    return action => {
      console.log("MiddleWare dispacting", action);
      const result = next(action);
      console.log("middleware next state", store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

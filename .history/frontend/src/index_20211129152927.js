import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
axios.defaults.withCredentials = true; //Làm cho Axios tự động gửi cookie theo yêu cầu của nó
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

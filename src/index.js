import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./context/StateProvider";
import reducer, { initialState } from "./reducers/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

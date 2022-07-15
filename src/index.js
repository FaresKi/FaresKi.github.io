import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
//import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const getRawData = (url) => {
  axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
getRawData("https://www.linkedin.com/in/fares-k/");
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

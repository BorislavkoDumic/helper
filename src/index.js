import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let myElement = document.getElementById("biologis-json-converter-helper");
if (myElement === null) {
  let newElement = document.createElement("div");
  newElement.setAttribute("id", "biologis-json-converter-helper");
  document.body.appendChild(newElement);
}

function changeInputText(inputEl, valuesString) {
  inputEl.value = valuesString;
  document.getElementById("biologis-json-converter-helper").style.display =
    "none";
}
let inputFields = document.getElementsByClassName("jsonHelper");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("click", callRender);
}

function callRender(event) {
  document.getElementById("biologis-json-converter-helper").style.display =
    "block";
  ReactDOM.render(
    <App
      onChange={valuesString => changeInputText(event.target, valuesString)}
    />,
    document.getElementById("biologis-json-converter-helper")
  );
}

// document.getElementById("mainInput").addEventListener("click", callRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

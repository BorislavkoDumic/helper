import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let formElement = document.getElementById("biologis-json-converter-helper");
if (formElement === null) {
  formElement = document.createElement("div");
  formElement.setAttribute("id", "biologis-json-converter-helper");
  document.body.appendChild(formElement);
}

function changeInputText(inputEl, valuesString) {
  inputEl.value = valuesString;
  formElement.style.display = "none";
}
let inputFields = document.getElementsByClassName("jsonHelper");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("click", callRender);
}
function callRender(event) {
  formElement.style.display = "block";

  let parsedValues = { label: "", type: "" };
  if (event.target.value !== "") {
    parsedValues = JSON.parse(event.target.value);
  }

  ReactDOM.render(
    <App
      parseValues={parsedValues}
      onChange={valuesString => changeInputText(event.target, valuesString)}
    />,
    formElement
  );
}

// document.getElementById("mainInput").addEventListener("click", callRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

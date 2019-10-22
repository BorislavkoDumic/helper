import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let formElement = document.getElementById("biologis-json-converter-helper");
if (formElement === null) {
  var newFormElement = document.createElement("div");
  newFormElement.setAttribute("id", "biologis-json-converter-helper");
  document.body.appendChild(newFormElement);
}

function changeInputText(inputEl, valuesString) {
  inputEl.value = valuesString;
  newFormElement.style.display = "none";
}
let inputFields = document.getElementsByClassName("jsonHelper");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("click", callRender);
}
function callRender(event) {
  newFormElement.style.display = "block";
  ReactDOM.render(
    <App
      values={event.target.value}
      onChange={valuesString => changeInputText(event.target, valuesString)}
    />,
    newFormElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

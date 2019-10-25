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
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function isValidInput(input) {
  if (
    !input.hasOwnProperty("type") ||
    !["checkbox", "text", "select", "radios"].includes(input.type)
  ) {
    return false;
  } else if (input.hasOwnProperty("options") && !Array.isArray(input.options)) {
    return false;
  } else {
    return true;
  }
}
function callRender(event) {
  formElement.style.display = "block";

  let parsedValues = { label: "", type: "", options: [] };
  if (isJson(event.target.value)) {
    parsedValues = JSON.parse(event.target.value);
  }
  if (event.target.value !== "" && !isValidInput(parsedValues)) {
    alert("Input is not a valid JSON string or is not formatted correctly!");
  } else {
    ReactDOM.render(
      <App
        parseValues={parsedValues}
        onChange={valuesString => changeInputText(event.target, valuesString)}
      />,
      formElement
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

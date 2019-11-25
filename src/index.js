import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

class JsonSelectionHelper {
  options = {
    className: "jsonHelper",
    idForm: "biologis-json-converter-helper",
    classForm: "ui-dialog ui-corner-all ui-widget ui-widget-content ui-front",
    classOverlay: "ui-widget-overlay ui-front"
  };

  constructor(options) {
    this.options = { ...this.options, ...options };

    let formElement = document.getElementById(this.options.idForm);
    if (formElement === null) {
      formElement = document.createElement("div");
      formElement.setAttribute("id", this.options.idForm);
      formElement.setAttribute("class", this.options.classForm);
      formElement.setAttribute(
        "style",
        "position: fixed; height: auto; width: 350px; top: 30%; left: 30%;"
      );
      document.body.appendChild(formElement);
      this.formElement = formElement;
    }
    let overlayElement;
    overlayElement = document.createElement("div");
    overlayElement.setAttribute("class", this.options.classOverlay);
    document.body.appendChild(overlayElement);
    overlayElement.style.display = "none";
    this.overlayElement = overlayElement;
  }

  jsonHelper = context => {
    let inputFields = context.getElementsByClassName(this.options.className);
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener("click", this.callRender);
    }
  };

  changeInputText = (inputEl, valuesString) => {
    inputEl.value = valuesString;
    this.formElement.style.display = "none";
    this.overlayElement.style.display = "none";
  };
  closeForm = () => {
    this.formElement.style.display = "none";
    this.overlayElement.style.display = "none";
  };
  callRender = event => {
    this.formElement.style.display = "block";
    this.overlayElement.style.display = "block";

    ReactDOM.render(
      <App
        inputValue={event.target.value}
        onChange={valuesString =>
          this.changeInputText(event.target, valuesString)
        }
        closeForm={this.closeForm}
      />,
      this.formElement
    );
  };
}

window.JsonSelectionHelper = JsonSelectionHelper;
serviceWorker.unregister();

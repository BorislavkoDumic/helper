import React, { Component } from "react";
import Radios from "./Radios";
import {
  openOverlay,
  showOptions,
  addField,
  removeField,
  changeValue,
  changeLabel,
  saveValues,
  cancel
} from "../actions/index";
import { connect } from "react-redux";

class Input extends Component {
  openOverlay = () => {
    this.props.openOverlay();
  };
  showOptions = value => {
    this.props.showOptions(value);
  };
  createUI = inputValues => {
    return inputValues.map((inputField, i) => (
      <div key={i}>
        <label>Value</label>
        <input
          className="input-option"
          type="text"
          onChange={this.changeValue(i)}
          value={inputField}
        />
        <input
          type="button"
          className="button-option"
          value="DELETE"
          onClick={this.removeField(i)}
        />
      </div>
    ));
  };
  changeValue = i => e => {
    this.props.changeValue(e.target.value, i);
  };
  changeLabel = e => {
    this.props.changeLabel(e.target.value);
  };
  addField = e => {
    e.preventDefault();
    this.props.addField();
  };
  removeField = i => e => {
    e.preventDefault();
    this.props.removeField(i);
  };
  saveValues = valuesString => {
    this.props.saveValues(valuesString);
  };
  cancel = () => {
    this.props.cancel();
  };

  render() {
    const {
      showOverlay,
      inputValues,
      overlayValue,
      labelValue,
      mainInput
    } = this.props;
    const uiElements = this.createUI(inputValues);

    let showOptionsInTextarea = {
      label: labelValue,
      type: overlayValue
    };

    if (
      showOptionsInTextarea.type === "select" ||
      showOptionsInTextarea.type === "radios"
    ) {
      showOptionsInTextarea = {
        ...showOptionsInTextarea,
        options: inputValues
      };
    }

    const valuesString = JSON.stringify(showOptionsInTextarea);

    return (
      <div>
        <div className="input-conntainer">
          <input
            onClick={this.openOverlay}
            className="input-field"
            type="text"
            placeholder="Click here to for input text"
            value={mainInput}
            readOnly
          ></input>
        </div>
        {showOverlay && (
          <div className="overlay" style={{ width: 500 }}>
            <h2>Fill the form</h2>
            <label className="label">
              Label:
              <input
                type="text"
                onChange={this.changeLabel}
                value={labelValue}
              ></input>
            </label>
            <div className="inputForm">
              <Radios
                title="Type"
                name="type"
                options={[
                  {
                    value: "text",
                    label: "Textfiled"
                  },
                  {
                    value: "checkbox",
                    label: "CheckBox"
                  },
                  {
                    value: "select",
                    label: "Select"
                  },
                  {
                    value: "radios",
                    label: "Radios"
                  }
                ]}
                showOptions={this.showOptions}
              />
              {overlayValue === "select" || overlayValue === "radios" ? (
                <div>
                  <label>ADD MORE OPTIONS</label>
                  <form className="options-form">
                    <button className="button-option" onClick={this.addField}>
                      ADD
                    </button>
                    {uiElements}
                  </form>
                </div>
              ) : null}
            </div>
            <textarea
              className="text-area"
              onChange={this.changeValue}
              value={valuesString}
            ></textarea>
            <button
              className="button"
              onClick={() => this.saveValues(valuesString)}
            >
              Save
            </button>
            <button className="button" onClick={this.cancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showOverlay: state.inputFields.showOverlay,
    showOptions: state.inputFields.showOptions,
    overlayValue: state.inputFields.value,
    inputValues: state.inputFields.values,
    labelValue: state.inputFields.labelValue,
    mainInput: state.inputFields.mainInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openOverlay: () => dispatch(openOverlay()),
    showOptions: value => dispatch(showOptions(value)),
    addField: () => dispatch(addField()),
    removeField: i => dispatch(removeField(i)),
    changeValue: (value, index) => dispatch(changeValue(value, index)),
    changeLabel: labelValue => dispatch(changeLabel(labelValue)),
    saveValues: valuesString => dispatch(saveValues(valuesString)),
    cancel: () => dispatch(cancel())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

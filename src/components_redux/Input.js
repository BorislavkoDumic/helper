import React, { Component } from "react";
import Radios from "./Radios";
import {
  openOverlay,
  showOptions,
  addField,
  removeField,
  changeValue
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
  addField = e => {
    e.preventDefault();
    this.props.addField();
  };
  removeField = i => e => {
    e.preventDefault();
    this.props.removeField(i);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { showOverlay, inputValues } = this.props;
    const uiElements = this.createUI(inputValues);

    return (
      <div>
        <div className="input-conntainer">
          <input
            onClick={this.openOverlay}
            className="input-field"
            type="text"
            placeholder="Click here to for input text"
          ></input>
        </div>
        {showOverlay && (
          <div className="overlay" style={{ width: 500 }}>
            <h2>Fill the form</h2>
            <label className="label">
              Label:
              <input type="text" onChange={this.changeValue}></input>
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
              {this.props.overlayValue === "select" ||
              this.props.overlayValue === "radios" ? (
                <div>
                  <label>ADD MORE OPTIONS</label>
                  <form className="options-form" onSubmit={this.handleSubmit}>
                    <button className="button-option" onClick={this.addField}>
                      ADD
                    </button>
                    {uiElements}
                  </form>
                </div>
              ) : null}
            </div>
            <textarea></textarea>
            <button className="button" onClick={this.handleSubmit}>
              Save
            </button>
            <button className="button">Cancel</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showOverlay: state.overlay.showOverlay,
    showOptions: state.overlay.showOptions,
    overlayValue: state.overlay.value,
    inputValues: state.inputFields.values
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openOverlay: () => dispatch(openOverlay()),
    showOptions: value => dispatch(showOptions(value)),
    addField: () => dispatch(addField()),
    removeField: i => dispatch(removeField(i)),
    changeValue: (value, index) => dispatch(changeValue(value, index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

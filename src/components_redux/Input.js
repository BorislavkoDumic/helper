import React, { Component } from "react";
import Radios from "./Radios";
import {
  addField,
  removeField,
  changeType,
  changeValue,
  changeLabel,
  saveValues,
  cancel
} from "../actions/index";
import { connect } from "react-redux";

class Input extends Component {
  changeType = value => {
    this.props.changeType(value);
  };
  createUI = options => {
    return options.map((inputField, i) => (
      <div key={i}>
        <label>Value</label>
        <input
          style={{ width: "240px" }}
          className="input-option"
          type="text"
          onChange={this.changeValue(i)}
          value={inputField}
        />
        <input
          type="button"
          className="button"
          value="Delete"
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
    this.props.changeTextfield(valuesString);
  };
  cancel = () => {
    this.props.closeForm();
  };
  render() {
    const { options, type, label } = this.props;
    const uiElements = this.createUI(options);

    let jsonObject = {
      label: label,
      type: type
    };

    if (jsonObject.type === "select" || jsonObject.type === "radios") {
      jsonObject = {
        ...jsonObject,
        options: options
      };
    }

    const valuesString = JSON.stringify(jsonObject);

    return (
      <div>
        <div>
          <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
            <span
              className="dialog-title"
              style={{ fontSize: 15, color: "white" }}
            >
              Fill the form
            </span>
            <button
              title="CLose"
              className="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close"
              onClick={this.cancel}
            >
              <span className="ui-button-icon ui-icon ui-icon-closethick"></span>
              <span className="ui-button-icon-space"></span>
            </button>
          </div>
          <div
            className="ui-front ui-dialog-content ui-widget-content"
            style={{ width: "auto" }}
          >
            {this.props.errors.map((item, i) => {
              return (
                <div key={i}>
                  <span style={{ color: "red", fontSize: 15 }}>{item}</span>
                </div>
              );
            })}
            <label className="label">
              Label:
              <input
                type="text"
                onChange={this.changeLabel}
                value={label}
                style={{ width: "-webkit-fill-available" }}
              ></input>
            </label>
            <div className="inputForm">
              <label>Type</label>
              <Radios
                name="type"
                value={type}
                options={[
                  {
                    value: "text",
                    label: "Textfiled"
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox"
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
                onChange={this.changeType}
              />
              {type === "select" || type === "radios" ? (
                <div>
                  <form
                    className="options-form"
                    style={{ marginBottom: "10px" }}
                  >
                    <button
                      style={{ marginLeft: "30%" }}
                      className="button button--primary js-form-submit form-submit ui-button ui-corner-all ui-widget"
                      onClick={this.addField}
                    >
                      Add more options
                    </button>
                    {uiElements}
                  </form>
                </div>
              ) : null}
            </div>
            <textarea
              onChange={changeValue}
              className="text-area"
              value={valuesString}
              style={{ width: "-webkit-fill-available", height: "50px" }}
            ></textarea>
          </div>
          <div className="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
            <button
              type="button"
              className="button button--primary js-form-submit form-submit ui-button ui-corner-all ui-widget"
              onClick={() => this.saveValues(valuesString)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    type: state.inputFields.type,
    options: state.inputFields.options,
    label: state.inputFields.label,
    errors: state.inputFields.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeType: value => dispatch(changeType(value)),
    addField: () => dispatch(addField()),
    removeField: i => dispatch(removeField(i)),
    changeValue: (value, index) => dispatch(changeValue(value, index)),
    changeLabel: label => dispatch(changeLabel(label)),
    saveValues: valuesString => dispatch(saveValues(valuesString)),
    cancel: () => dispatch(cancel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

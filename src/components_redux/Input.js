import React, { Component } from "react";
import Radios from "./Radios";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      values: [""]
    };
    this.openNav = this.openNav;
    this.handleSubmit = this.handleSubmit;
  }
  openNav = () => {
    const style = { width: 550 };
    this.setState({ style });
  };
  handleChangeShow = value => {
    this.setState({
      value: value
    });
  };

  createUI = () => {
    return this.state.values.map((inputField, i) => (
      <div key={i}>
        <label>Value</label>
        <input
          className="input-option"
          type="text"
          onChange={this.handleChange(i)}
          value={inputField}
        />
        <input
          type="button"
          className="button-option"
          value="DELETE"
          onClick={this.removeClick(i)}
        />
      </div>
    ));
  };

  handleChange = i => e => {
    let values = [...this.state.values];
    values[i] = e.target.value;
    this.setState({ values });
  };
  addClick = e => {
    e.preventDefault();
    let values = this.state.values.concat([""]);
    this.setState({
      values
    });
  };
  removeClick = i => e => {
    e.preventDefault();
    let values = [
      ...this.state.values.slice(0, i),
      ...this.state.values.slice(i + 1)
    ];
    this.setState({ values });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="input-conntainer">
          <input
            onClick={this.openNav}
            className="input-field"
            type="text"
            placeholder="Click here to for input text"
          ></input>
        </div>
        <div className="overlay" style={this.state.style}>
          <h2>Fill the form</h2>
          <label className="label">
            Label:
            <input type="text"></input>
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
              handleChangeShow={this.handleChangeShow}
            />
            {this.state.value === "select" || this.state.value === "radios" ? (
              <div>
                <label>ADD MORE OPTIONS</label>
                <form className="options-form" onSubmit={this.handleSubmit}>
                  <label>
                    Value
                    <input
                      type="text"
                      name="input"
                      className="input-option"
                      onChange={this.state.handleChange}
                    />
                  </label>
                  <button className="button-option" onClick={this.addClick}>
                    ADD
                  </button>
                  {this.createUI()}
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
      </div>
    );
  }
}
export default Input;

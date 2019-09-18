import React, { Component } from "react";

export default class Radios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "text"
    };
    const options = {
      text: "Textfield",
      radios: "Radios",
      checkbox: "CheckBox",
      select: "Select",
      name: "input",
      type: "radio"
    };
  }
  radioChange = event => {
    this.setState({
      type: event.target.value
    });
  };
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        
        <label>
          <input
            type="radio"
            name="input"
            value="text"
            onChange={this.radioChange}
            checked={this.state.type === "text"}
          />
          Textfield
        </label>
        <label>
          <input
            type="radio"
            name="input"
            value="checkbox"
            onChange={this.radioChange}
            checked={this.state.type === "checkbox"}
          />
          Checkbox
        </label>
        <label>
          <input
            type="radio"
            name="input"
            value="select"
            onChange={this.radioChange}
            checked={this.state.type === "select"}
          />
          Select
        </label>
        <label>
          <input
            type="radio"
            name="input"
            value="radios"
            onChange={this.radioChange}
            checked={this.state.type === "radios"}
          />
          Radios
        </label>
      </div>
    );
  }
}

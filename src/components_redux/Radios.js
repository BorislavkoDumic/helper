import React, { Component } from "react";

export default class Radios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: " "
    };
  }
  optionsShow = () => {
    this.setState({ showComponet: !this.state.showComponet });
  };
  radioChange = event => {
    this.setState({
      type: event.target.name
    });
  };
  render() {
    return (
      <div>
        <label>Type</label>
        <label>
          <input
            type="radio"
            name="text"
            onChange={this.radioChange}
            checked={this.state.type === "text"}
          />
          Textfield
        </label>
        <label>
          <input
            type="radio"
            name="checkbox"
            onChange={this.radioChange}
            checked={this.state.type === "checkbox" }
          />
          Checkbox
        </label>
        <label>
          <input
            type="radio"
            name="select"
            onChange={this.radioChange}
            checked={this.state.type === "select"}
          />
          Select
        </label>
        <label>
          <input
            type="radio"
            name="radios"
            onChange={this.radioChange}
            checked={this.state.type === "radios"}
          />
          Radios
        </label>
      </div>
    );
  }
}

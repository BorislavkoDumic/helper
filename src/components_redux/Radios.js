import React, { Component } from "react";

export default class Radios extends Component {
  radioChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        {this.props.title}
        {this.props.options.map((option, i) => (
          <div key={i} className="inputForm">
            <input
              id={option.value}
              type="radio"
              name={this.props.name}
              value={option.value}
              onChange={this.radioChange}
              checked={this.props.value === option.value}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }
}

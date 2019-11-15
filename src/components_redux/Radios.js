import React, { Component } from "react";

export default class Radios extends Component {
  radioChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        {this.props.options.map((option, i) => (
          <div
            key={i}
            className="gi-defaults-dummy-random-string-0 fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper"
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              display: "inline-flex",
              textAlign: "center"
            }}
          >
            <input
              id={option.value}
              type="radio"
              name={this.props.name}
              value={option.value}
              onChange={this.radioChange}
              checked={this.props.value === option.value}
            />
            <label
              style={{ marginLeft: "5px", marginTop: "-1px" }}
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

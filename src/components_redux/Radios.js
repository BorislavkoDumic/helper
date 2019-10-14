import React, { Component } from "react";

export default class Radios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  radioChange = event => {
    this.setState({
      type: event.target.value
    });
    this.props.changeType(event.target.value);
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
              checked={this.state.type === option.value}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Radios extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {this.props.title}
        {this.props.options.map((option,i)=>(
            <div key={i} >
            <input
              key={i}
              id={option.value}
              type="radio"
              name={this.props.name}
              value={option.value}
              onChange={this.radioChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
            </div>
        ))}
      </div>
    );
  }
}

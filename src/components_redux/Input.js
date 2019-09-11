import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openNav = this.openNav.bind(this);
  }
  openNav() {
    const style = { width: 550 };
    this.setState({ style });
  }
  handleChange = () => {
    this.setState({ showComponet: !this.state.showComponet });
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
          <form className="inputForm">
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={!this.state.showComponet}
              />{" "}
              Textfield
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={!this.state.showComponet}
              />{" "}
              Checkbox
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={this.state.showComponet}
              />{" "}
              Select
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={this.state.showComponet}
              />{" "}
              Radios
            </label>
            {this.state.showComponet ? (
              <div>
                {" "}
                <label>ADD MORE OPTIONS</label>
                <form className="inputForm">
                  <label>
                    Value
                    <input type="text" name="input" />
                  </label>
                  <button className="button-small">ADD</button>
                  <button className="button-small">EDIT</button>
                  <button className="button-small">DELETE</button>
                </form>
              </div>
            ) : null}
          </form>
          <button className="button">Save</button>
          <button className="button">Cancel</button>
        </div>
      </div>
    );
  }
}
export default Input;

import React, { Component } from "react";
import Radios from "./Radios";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.openNav = this.openNav;
    this.state = { values: [] };
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
    return this.state.values.map((el, i) => (
      <div key={i}>
        <label>Value</label>
        <input
          type="text"
          defaultValue={el || ""}
          onChange={this.state.handleChange}
        />
        <input type="button" value="DELETE" onClick={this.removeClick} />
      </div>
    ));
  };

  handleChange = (i, event) => {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ value: event.target.value });
  };
  addClick = () => {
    this.setState(prevState => ({ values: [...prevState.values, ""] }));
  };
  removeClick = i => {
    let values = [...this.state.values];
    values.splice(i, 1);
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
                <form className="inputForm" onSubmit={this.handleSubmit}>
                  {this.createUI()}
                  <label>
                    Value
                    <input
                      type="text"
                      name="input"
                      onChange={this.state.handleChange}
                    />
                  </label>
                  <button className="button-small" onClick={this.addClick}>
                    ADD
                  </button>
                  <button className="button-small" onClick={this.removeClick}>
                    DELETE
                  </button>
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

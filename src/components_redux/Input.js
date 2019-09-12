import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openNav = this.openNav;
    this.state = { values: [] };
    this.handleSubmit = this.handleSubmit;
  }
  openNav = () => {
    const style = { width: 550 };
    this.setState({ style });
  };
  handleChange = () => {
    this.setState({ showComponet: !this.state.showComponet });
  };

  createUI = () => {
    return this.state.values.map((el, i) => (
      <div key={i}>
        <label>Value</label>
        <input type="text" />
        <input type="button" value="DELETE" onClick={this.removeClick} />
      </div>
    ));
  };

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }
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
        <div className="overlay">
          <h2>Fill the form</h2>
          <label className="label">
            Label:
            <input type="text"></input>
          </label>
          <form className="inputForm">
            <label>Type</label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={!this.state.showComponet}
              />
              Textfield
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={!this.state.showComponet}
              />
              Checkbox
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={this.state.showComponet}
              />
              Select
            </label>
            <label>
              <input
                type="radio"
                name="input"
                onChange={this.handleChange}
                checked={this.state.showComponet}
              />
              Radios
            </label>
            {this.state.showComponet ? (
              <div>
                <label>ADD MORE OPTIONS</label>
                <form className="inputForm" onSubmit={this.handleSubmit}>
                  {this.createUI()}
                  <label>
                    Value
                    <input type="text" name="input" />
                  </label>
                  <button className="button-small" onClick={this.addClick}>
                    ADD
                  </button>
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

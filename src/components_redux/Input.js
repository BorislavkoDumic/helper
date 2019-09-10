import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openNav = this.openNav.bind(this);
    //this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.closeNav);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeNav);
  }

  openNav() {
    const style = { width: 550 };
    this.setState({ style });
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.addEventListener("click", this.closeNav);
  }


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
        <div ref="snav" className="overlay" style={this.state.style}>
          <h2>Fill the form</h2>
          <label>
            Some text:
            <input type="text"></input>
          </label>
          <br></br>
          <br></br>
          <form name="inputForm">
            <input type="radio" name="input" /> Textfield
            <input type="radio" name="input" /> Checkbox
            <input type="radio" name="input" /> Select
            <input type="radio" name="input" /> Radios
          </form>
          <br></br>
          <br></br>
          <button className="button">Create</button>
          <button className="button">Edit</button>
          <button className="button">Delete</button>
        </div>
        <div className="list-group">{this.props.children}</div>
      </div>
    );
  }
}
export default Input;

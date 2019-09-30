import React, { Component } from "react";
import Radios from "./Radios";
import { openOverlay, showOptions, addField } from "../actions/index";
import { connect } from "react-redux";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      values: []
    };
    this.openNav = this.openNav;
    this.handleSubmit = this.handleSubmit;
  }
  openOverlay = () => {
    this.props.openOverlay();
  };
  showOptions = value => {
    this.props.showOptions();
    this.setState({
      value: value
    });
  };

  createUI = () => {
    return this.state.values.map((inputField, i) => (
      <div key={i}>
        <label>Value</label>
        <input
          className="input-option"
          type="text"
          onChange={this.handleChange(i)}
          value={inputField}
        />
        <input
          type="button"
          className="button-option"
          value="DELETE"
          onClick={this.removeClick(i)}
        />
      </div>
    ));
  };

  handleChange = i => e => {
    let values = [...this.state.values];
    values[i] = e.target.value;
    this.setState({ values });
  };
  addField = e => {
    e.preventDefault();
    this.props.addField();
  };
  removeClick = i => e => {
    e.preventDefault();
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { showOverlay } = this.props;

    return (
      <div>
        <div className="input-conntainer">
          <input
            onClick={this.openOverlay}
            className="input-field"
            type="text"
            placeholder="Click here to for input text"
          ></input>
        </div>
        {showOverlay && (
          <div className="overlay" style={{ width: 500 }}>
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
                showOptions={this.showOptions}
              />
              {this.state.value === "select" ||
              this.state.value === "radios" ? (
                <div>
                  <label>ADD MORE OPTIONS</label>
                  <form className="options-form" onSubmit={this.handleSubmit}>
                    <label>
                      Value
                      <input
                        type="text"
                        name="input"
                        className="input-option"
                        onChange={this.state.handleChange}
                      />
                    </label>
                    <button className="button-option" onClick={this.addField}>
                      ADD
                    </button>
                    {this.createUI()}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showOverlay: state.overlay.showOverlay,
    showOptions: state.overlay.showOptions,
    addField: state.inputFields.addField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openOverlay: () => dispatch(openOverlay()),
    showOptions: () => dispatch(showOptions()),
    addField: values => dispatch(addField(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

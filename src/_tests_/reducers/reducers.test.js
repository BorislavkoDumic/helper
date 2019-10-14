import inputFields from "../../reducers/inputFields";
import {
  changeType,
  changeLabel,
  addField,
  removeField
} from "../../actions/index";

describe("when action is clicked", () => {
  it("When value of label is changed", () => {
    const state = {
      label: ""
    };
    const expectedState = {
      label: "Test text"
    };
    expect(inputFields(state, changeLabel("Test text"))).toEqual(expectedState);
  });

  it("Action for change the type", () => {
    const state = {
      // showOptions: false,
      type: "",
      options: [],
      label: "",
      jsonString: ""
    };
    const expectedState = {
      // showOptions: true,
      type: "select",
      options: [],
      label: "",
      jsonString: ""
    };

    let newState = inputFields(state, changeType("select"));
    expect(inputFields(newState, changeType("select"))).toEqual(expectedState);
  });
  it("Action for add field", () => {
    const state = {
      options: []
    };
    const expectedState = {
      options: ["", ""]
    };

    let newState = inputFields(state, addField());
    expect(inputFields(newState, addField())).toEqual(expectedState);
  });
  it("Action for remove field", () => {
    const state = {
      options: [" "]
    };
    const expectedState = {
      options: []
    };

    let newState = inputFields(state, removeField());
    expect(inputFields(newState, removeField())).toEqual(expectedState);
  });
});

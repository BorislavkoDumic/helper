import {
  OPEN_OVERLAY,
  SHOW_OPTIONS,
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL
} from "../../utils/actionTypes";
import {
  openOverlay,
  showOptions,
  addField,
  removeField,
  changeValue,
  changeLabel,
  saveValues,
  cancel
} from "../../actions/index";

describe("displayActions", () => {
  it("Creates an action to open overlay", () => {
    const expectedAction = {
      type: OPEN_OVERLAY
    };
    expect(openOverlay()).toEqual(expectedAction);
  });
  it("Creates an action to show options", () => {
    const expectedAction = {
      type: SHOW_OPTIONS,
      value: "First value"
    };
    expect(showOptions("First value")).toEqual(expectedAction);
  });
  it("Creates an action to add field", () => {
    const expectedAction = {
      type: ADD_FIELD
    };
    expect(addField()).toEqual(expectedAction);
  });
  it("Creates an action to remove field", () => {
    const expectedAction = {
      type: REMOVE_FIELD,
      index: 5
    };
    expect(removeField(5)).toEqual(expectedAction);
  });
  it("Creates an action when value is changed", () => {
    const expectedAction = {
      type: CHANGE_VALUE,
      value: "Some text",
      index: 1
    };
    expect(changeValue("Some text", 1)).toEqual(expectedAction);
  });
  it("Creates an action when value of label is changed", () => {
    const expectedAction = {
      type: CHANGE_LABEL,
      labelValue: "Value of label"
    };
    expect(changeLabel("Value of label")).toEqual(expectedAction);
  });
  it("Creates an action for saving values", () => {
    const expectedAction = {
      type: SAVE_VALUES,
      valuesString: "Values"
    };
    expect(saveValues("Values")).toEqual(expectedAction);
  });
  it("Creates an action for canceling save", () => {
    const expectedAction = {
      type: CANCEL
    };
    expect(cancel()).toEqual(expectedAction);
  });
});

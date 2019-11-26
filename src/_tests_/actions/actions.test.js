import {
  OPEN_OVERLAY,
  CHANGE_TYPE,
  ADD_FIELD,
  REMOVE_FIELD,
  CHANGE_VALUE,
  CHANGE_LABEL,
  SAVE_VALUES,
  CANCEL,
  SET_VALUES
} from "../../utils/actionTypes";
import {
  openOverlay,
  changeType,
  addField,
  removeField,
  changeValue,
  changeLabel,
  saveValues,
  cancel,
  setValues
} from "../../actions/index";

describe("displayActions", () => {
  it("Creates an action to open overlay", () => {
    const expectedAction = {
      type: OPEN_OVERLAY
    };
    expect(openOverlay()).toEqual(expectedAction);
  });
  it("Creates an action to change type", () => {
    const expectedAction = {
      type: CHANGE_TYPE,
      value: "select"
    };
    expect(changeType("select")).toEqual(expectedAction);
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
      label: "Value of label"
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
  it("Creates an action for set the values", () => {
    const expectedAction = {
      type: SET_VALUES,
      jsonString: '{"label":"123","type":"checkbox"}'
    };
    expect(setValues('{"label":"123","type":"checkbox"}')).toEqual(
      expectedAction
    );
  });
});

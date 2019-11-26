import inputFields from "../../reducers/inputFields";
import {
  changeType,
  changeLabel,
  addField,
  removeField,
  setValues
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
      type: "",
      options: [],
      label: "",
      jsonString: ""
    };
    const expectedState = {
      type: "select",
      options: [],
      label: "",
      jsonString: ""
    };

    let newState = inputFields(state, changeType("select"));
    expect(inputFields(newState, changeType("select"))).toEqual(expectedState);
  });
  it("Action for add two field", () => {
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
      options: ["option1", "option2", "option3", "option4"]
    };
    const expectedState = {
      options: ["option1", "option2", "option4"]
    };

    expect(inputFields(state, removeField(2))).toEqual(expectedState);
  });
  it("Action for set values", () => {
    const state = {
      type: "",
      options: [],
      label: "",
      parsedValues: "",
      errors: []
    };
    const expectedState = {
      type: "select",
      options: ["1", "2", "3"],
      label: "New label",
      parsedValues: {
        label: "New label",
        type: "select",
        options: ["1", "2", "3"]
      },
      errors: []
    };

    let newState = inputFields(
      state,
      setValues('{"label":"New label","type":"select","options":["1","2","3"]}')
    );
    expect(
      inputFields(
        newState,
        setValues(
          '{"label":"New label","type":"select","options":["1","2","3"]}'
        )
      )
    ).toEqual(expectedState);
  });
});

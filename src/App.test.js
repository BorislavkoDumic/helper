import React from "react";
import Input from "./components_redux/Input";
import { createStore } from "redux";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import reducer from "./reducers";
import {
  openOverlay,
  changeLabel,
  changeType,
  addField,
  changeValue,
  removeField,
  saveValues,
  cancel,
  setValues
} from "./actions/index";

describe("Basic test fof showing overlay", () => {
  it("Open overlay and input value of label", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Selecting the type of radio buttons", () => {
  it("Select type text", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value text"));
    store.dispatch(changeType("text"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Select type checkbox", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value checkbox"));
    store.dispatch(changeType("checkbox"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Select type select", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value select"));
    store.dispatch(changeType("select"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Select type radios", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value radios"));
    store.dispatch(changeType("radios"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Advanced tests of app ", () => {
  it("Selecting the type of radio buttons (select), add fields and input values", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));
    store.dispatch(changeType("select"));
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(changeValue("1", 0));
    store.dispatch(changeValue("2", 1));
    store.dispatch(changeValue("3", 2));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Selecting the type of radio buttons (radios), add fields and input values then change the type (text)", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));
    store.dispatch(changeType("radios"));
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(changeValue("1", 0));
    store.dispatch(changeValue("2", 1));
    store.dispatch(changeValue("3", 2));
    store.dispatch(changeType("text"));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Selecting the type of radio buttons (select), add fields and input values then remove one field", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));
    store.dispatch(changeType("select"));
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(changeValue("1", 0));
    store.dispatch(changeValue("2", 1));
    store.dispatch(changeValue("3", 2));
    store.dispatch(removeField(1));

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Selecting the type of radio buttons (select), add fields and input values then click save button", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));
    store.dispatch(changeType("select"));
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(changeValue("1", 0));
    store.dispatch(changeValue("2", 1));
    store.dispatch(changeValue("3", 2));
    store.dispatch(
      saveValues({
        label: "Label Value",
        type: "select",
        options: ["1", "2", "3"]
      })
    );

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Selecting the type of radio buttons (select), add fields and input values then click cancel button", () => {
    const store = createStore(reducer);
    store.dispatch(openOverlay());
    store.dispatch(changeLabel("Label value"));
    store.dispatch(changeType("select"));
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(addField());
    store.dispatch(changeValue("1", 0));
    store.dispatch(changeValue("2", 1));
    store.dispatch(changeValue("3", 2));
    store.dispatch(cancel());

    const tree = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe("Show error messages", () => {
    it("Show error message for incorrect type", () => {
      let inputValue = '{"label":"123", "type":"incorrectType"}';
      const store = createStore(reducer);
      store.dispatch(openOverlay());
      store.dispatch(setValues(inputValue));

      const tree = renderer
        .create(
          <Provider store={store}>
            <Input />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("Show error message for incorrect options", () => {
      let inputValue =
        '{"label":"12","type":"radios","incorrectOptions":["12","12","12"]}';
      const store = createStore(reducer);
      store.dispatch(openOverlay());
      store.dispatch(setValues(inputValue));

      const tree = renderer
        .create(
          <Provider store={store}>
            <Input />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("Show error message for incorrect JSON", () => {
      let inputValue =
        '"{"label":"12","type":"select","options":["12","12","12"]"';
      const store = createStore(reducer);
      store.dispatch(openOverlay());
      store.dispatch(setValues(inputValue));

      const tree = renderer
        .create(
          <Provider store={store}>
            <Input />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

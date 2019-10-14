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
  cancel
} from "./actions/index";

describe("Open overlay and input value of label", () => {
  it("Matches the snapshot", () => {
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
  it("Matches the snapshot ", () => {
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
  it("Matches the snapshot ", () => {
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
  it("Matches the snapshot ", () => {
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
  it("Matches the snapshot ", () => {
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
describe("Selecting the type of radio buttons (select), add fields and input values", () => {
  it("Matches the snapshot ", () => {
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
  describe("Selecting the type of radio buttons (radios), add fields and input values then change the type (text)", () => {
    it("Matches the snapshot ", () => {
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
  });
  describe("Selecting the type of radio buttons (select), add fields and input values then remove one field", () => {
    it("Matches the snapshot ", () => {
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
  });
  describe("Selecting the type of radio buttons (select), add fields and input values then click save button", () => {
    it("Matches the snapshot ", () => {
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
  });
  describe("Selecting the type of radio buttons (select), add fields and input values then click cancel button", () => {
    it("Matches the snapshot ", () => {
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
  });
});

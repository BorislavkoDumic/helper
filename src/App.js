import React from "react";
import Input from "./components_redux/Input";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { setValues } from "./actions";

const store = createStore(reducer);

function App(props) {
  if (props.parseValues) {
    store.dispatch(setValues(props.parseValues));
  }
  return (
    <Provider store={store}>
      <Input changeTextfield={props.onChange} closeForm={props.closeForm} />
    </Provider>
  );
}

export default App;

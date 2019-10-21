import React from "react";
import Input from "./components_redux/Input";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { openOverlay } from "./actions";

const store = createStore(reducer);

function App(props) {
  if (props.testProp) {
    store.dispatch(openOverlay());
  }

  return (
    <Provider store={store}>
      <Input changeTextfield={props.onChange} />
    </Provider>
  );
}

export default App;

import React from "react";
import Input from "./components_redux/Input";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { setValues } from "./actions";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App(props) {
  if (props.inputValue) {
    store.dispatch(setValues(props.inputValue));
  }
  return (
    <Provider store={store}>
      <Input changeTextfield={props.onChange} closeForm={props.closeForm} />
    </Provider>
  );
}

export default App;

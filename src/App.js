import React from "react";
import Input from "./components_redux/Input";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { overlayReducer } from "./reducers/overlay";

const store = createStore(overlayReducer);

function App() {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}

export default App;

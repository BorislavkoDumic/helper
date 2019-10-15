import React from "react";
import Input from "./components_redux/Input";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}

export default App;

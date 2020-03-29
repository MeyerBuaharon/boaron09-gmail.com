import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { MainApp } from "./components";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;

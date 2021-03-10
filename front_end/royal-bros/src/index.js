import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { BrowserRouter } from "react-router-dom";
import SelectionContextProvider from "./Context/SelectionContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectionContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SelectionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

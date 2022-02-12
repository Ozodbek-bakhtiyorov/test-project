import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { reducer } from "./Redux/reducer";
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

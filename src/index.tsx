import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/global.css";
import Views from "./views";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Views />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

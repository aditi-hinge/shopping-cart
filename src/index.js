import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";

//3. import provider
import { Provider } from "react-redux";
import store from "./components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>
);

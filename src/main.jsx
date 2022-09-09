import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
const globalState = {
  order: {
    table: 0,
    total: 0,
    menu: [],
  },
};

//reducer
// eslint-disable-next-line no-unused-vars
const rootReducer = (state = globalState, action) => {
  console.log(1234, action);
  switch (action.type) {
    case "INCREMENT":
      let data = { ...state };
      data.order.table = action.table;
      data.order.menu.push(`${action.id}`);
      return { ...state, order: data.order };
    case "DECREMENT":
      data = { ...state };
      data.order.table = action.table;
      data.order.menu.push(`${action.id}`);
      return { ...state, count: state.count - 1 };
    case "PAY":
      return { ...state, order: state.count + 1 };
    case "CANCEL":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

//store
const storeRedux = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.StrictMode>
);

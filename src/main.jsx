import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { ContextWrapper } from "./context";
const globalState = {
  order: {
    table: 0,
    total: 0,
    totalMenu: 0,
    menu: [],
    transaction: [],
  },
  content: "foodMenu",
};

//reducer
// eslint-disable-next-line no-unused-vars
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      let data = { ...state };
      data.order.table = action.table;
      data.order.totalMenu = data.order.totalMenu + 1;
      data.order.menu.push(`${action.id}`);
      return { ...state, order: data.order };
    case "PAY":
      let dataReset = { ...state };
      dataReset.order.transaction.push({
        menu: dataReset.order.menu,
        total: action.profit,
        table: dataReset.order.table,
      });
      dataReset.order.total = dataReset.order.total + action.profit;
      dataReset.order.totalMenu = 0;
      dataReset.order.table = 0;
      dataReset.order.menu = [];
      return { ...state, order: dataReset.order };
    case "RESET":
      data.order.totalMenu = 0;
      data.order.table = 0;
      data.order.menu = [];
      return { ...state, order: data.order };
    case "DELETE":
      let deleteData = { ...state };
      deleteData.order.totalMenu = deleteData.order.totalMenu - 1;
      deleteData.order.menu.splice(action.index, 1);
      return { ...state, order: deleteData.order };
    case "CHANGE":
      let changeMenu = { ...state };
      changeMenu.content = action.menu;
      return { ...state, content: changeMenu.content };
    default:
      return state;
  }
};

//store
const storeRedux = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </Provider>
  </React.StrictMode>
);

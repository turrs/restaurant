import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  AppstoreOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
const LeftMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="p-2 w-[90%] flex justify-center items-center">
        <AppstoreOutlined
          style={{ fontSize: "30px", color: "#38bdf8" }}
          onClick={() => dispatch({ type: "CHANGE", menu: "foodMenu" })}
        />
      </div>
      <div className="p-2 w-[90%] flex justify-center items-center">
        <HistoryOutlined
          style={{ fontSize: "30px", color: "#38bdf8" }}
          onClick={() => dispatch({ type: "CHANGE", menu: "history" })}
        />
      </div>
    </div>
  );
};

export default LeftMenu;

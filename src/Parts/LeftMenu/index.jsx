import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  AppstoreOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { Button } from "../../components";
const LeftMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2 w-[90%] flex justify-center items-center">
        <AppstoreOutlined style={{ fontSize: "30px", color: "#38bdf8" }} />
      </div>
      <div className="p-2 w-[90%] flex justify-center items-center">
        <HistoryOutlined style={{ fontSize: "30px", color: "#38bdf8" }} />
      </div>
    </div>
  );
};

export default LeftMenu;

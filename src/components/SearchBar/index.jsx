import { Input } from "antd";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  AppstoreOutlined,
  UserOutlined,
  HistoryOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const SearchBar = () => (
  <div className="md:w-[600px] w-[260px]">
    <Input
      prefix={<SearchOutlined style={{ color: "#cccccc" }} />}
      style={{ width: "100%", borderRadius: 20 }}
      size="large"
      placeholder="Search Menu"
    />
  </div>
);

export default SearchBar;

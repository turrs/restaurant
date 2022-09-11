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
import { useContext } from "react";
import { AppContext } from "../../context";

const SearchBar = () => {
  const { setValueSearch, valueSearch } = useContext(AppContext);
  const onChangeValue = value => {
    setValueSearch(value);
  };
  return (
    <div className="md:w-[600px] w-[260px]">
      <Input
        prefix={<SearchOutlined style={{ color: "#cccccc" }} />}
        style={{ width: "100%", borderRadius: 20 }}
        size="large"
        placeholder="Search Menu"
        onChange={value => onChangeValue(value.target.value)}
      />
    </div>
  );
};
export default SearchBar;

import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  AppstoreOutlined,
  UserOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { Button, SearchBar, UserSection } from "../../components";
import { IcashierLogo } from "../../assets/images";

const Header = () => {
  return (
    <div className="flex flex-row items-center w-full ">
      <div className="md:w-1/12 p-2">
        <div>
          <img className="w-full h-full" src={IcashierLogo}></img>
        </div>
      </div>
      <div className="md:w-10/12 flex flex-row">
        <SearchBar />
        <div className="w-[10%] pl-[50px] md:pl-0 flex justify-center items-center">
          <Button text="Filter" />
        </div>
      </div>
      <div className="md:w-4/12 hidden sm:block bg-white">
        <UserSection />
      </div>
    </div>
  );
};

export default Header;

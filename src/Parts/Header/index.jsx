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
import { useContext } from "react";
import { AppContext } from "../../context";
import { menu } from "../../json/ItemMenu.json";
const Header = () => {
  const { valueSearch, foodMenuData, setFoodMenuData } = useContext(AppContext);
  const filterData = (valueSearch, foodMenuData) => {
    console.log("p");
    function search(valueSearch, foodMenuData) {
      console.log("my array", foodMenuData);
      console.log("valueeeee", valueSearch);
      let dataFilter = [];
      for (var i = 0; i < foodMenuData.length; i++) {
        console.log(1111111, foodMenuData[i].name);
        if (
          foodMenuData[i].name
            .toLowerCase()
            .includes(valueSearch.toLowerCase()) === true
        ) {
          console.log("match", foodMenuData[i]);
          dataFilter = [...dataFilter, foodMenuData[i]];
        }
      }
      return dataFilter;
    }
    const data = search(valueSearch, menu);
    setFoodMenuData(data);
  };
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
          <Button
            text="Filter"
            onClick={() => filterData(valueSearch, foodMenuData)}
          />
        </div>
      </div>
      <div className="md:w-4/12 hidden sm:block bg-white">
        <UserSection />
      </div>
    </div>
  );
};

export default Header;

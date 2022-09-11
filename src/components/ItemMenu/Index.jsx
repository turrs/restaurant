import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IchickenMozarellaKentang } from "../../assets/images/index.jsx";
import Button from "../Button.jsx";
import TextDescription from "../TextDescription/index.jsx";
import TextMenu from "../TextMenu/index.jsx";
import TextPrice from "../TextPrice/Index.jsx";
const { Meta } = Card;

const ItemMenu = ({ params, id, name, price }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state);
  return (
    <div className="flex flex-col rounded-[25px]  bg-white hover:scale-105 hover:shadow-sm hover:shadow-blue">
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[150px] flex justify-center  md:h-[200px] w-[150px] h-[200px]">
          <img className="" src={IchickenMozarellaKentang}></img>
        </div>
        <div className="flex flex-col md:pt-10  ">
          <div className="-mt-2 max-w-[100px]">
            <TextMenu name={name} />
          </div>
          <div className="-mt-6">
            <TextDescription />
          </div>
          <div className="-mt-6">
            <TextPrice price={price} />
          </div>
        </div>
      </div>
      <div className="p-5 -mt-5">
        <Button
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              table: params.table,
              id: id,
            })
          }
          text="Pesan"
        />
      </div>
    </div>
  );
};
export default ItemMenu;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button.jsx";
import data from "../../json/ItemMenu.json";
import OrderItems from "../OrderItems/index.jsx";
import ModalPay from "../ModalPay/index.jsx";
const Pay = ({ value }) => {
  let totalPaying = value.order.menu.map((menu, id) => {
    let price = data.menu.find(x => x.id === menu).price;
    let total = 0;
    total = total + price;
    return total;
  });
  const sum = totalPaying => {
    return totalPaying.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  };
  let totalPay = 0;
  totalPay = sum(totalPaying);

  useEffect(() => {}, [value]);
  return (
    <div className="flex flex-col md:p-0 p-10 w-full h-full bg-white  rounded-[10px] group hover:shadow-md hover:shadow-blue">
      <div className="flex justify-center w-full h-full">
        <p className="text-blue  text-lg font-bold">Meja {value.order.table}</p>
      </div>
      <div className="p-2">
        <p className="text-black font-bold text-[18px]">Current Order</p>
      </div>
      <div className="-mt-5">
        {value.order.menu.map((menu, index) => {
          let itemsMenu = data.menu.find(x => x.id === menu).name;
          let itemsPrice = data.menu.find(x => x.id === menu).price;
          let items = data.menu.find(x => x.id === menu);
          return (
            <div key={index} className="p-1 hover:scale-105">
              <OrderItems items={items} index={index}></OrderItems>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center pt-2 bg-blue">
        <p className="text-[20px] text-center font-bold">
          Total Pay : {totalPay}
        </p>
      </div>
      <div className="p-2  w-full flex justify-center ">
        <ModalPay menu={value.order.menu} totalPaying={totalPaying} />
      </div>
    </div>
  );
};

export default Pay;

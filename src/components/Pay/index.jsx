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
    <div className="flex flex-col w-full h-full bg-[#64748b] hover:scale-105 rounded-[10px] group hover:shadow-md hover:shadow-blue">
      <div className="flex justify-center pt-5 w-full h-full">
        <p className="text-blue  text-lg">Meja {value.order.table}</p>
      </div>
      <div>
        {value.order.menu.map((menu, index) => {
          let itemsMenu = data.menu.find(x => x.id === menu).name;
          let itemsPrice = data.menu.find(x => x.id === menu).price;
          let items = data.menu.find(x => x.id === menu);
          return (
            <div className="p-1 hover:scale-105">
              <OrderItems items={items} index={index}></OrderItems>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-2 bg-blue">
        <p>Total Pay : {totalPay}</p>
      </div>
      <div className="p-2">
        <ModalPay menu={value.order.menu} totalPaying={totalPaying} />
      </div>
    </div>
  );
};

export default Pay;

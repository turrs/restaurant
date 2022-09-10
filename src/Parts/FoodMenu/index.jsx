import React from "react";
import { ItemMenu } from "../../components";
import { menu } from "../../json/ItemMenu.json";
import { useEffect } from "react";
import { useState } from "react";
import { Axios } from "../../Utils";
import { useContext } from "react";
import { AppContext } from "../../context";
const FoodMenu = () => {
  let params = { id: 1, table: 5 };

  return (
    <div className="flex flex-row flex-wrap bg-white p-1">
      {menu.map((menu, key) => {
        return (
          <div className="p-2" key={menu.id}>
            <ItemMenu
              id={menu.id}
              name={menu.name}
              price={menu.price}
              params={{ id: params.id, table: params.table }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;

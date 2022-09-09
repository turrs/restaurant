import React from "react";
import { ItemMenu } from "../../components";
import { menu } from "../../json/ItemMenu.json";
import { Col, Row, Empty } from "antd";
const FoodMenu = () => {
  let params = {
    id: 1,
    table: 5,
  };
  console.log(123, menu);
  return (
    <div className="flex flex-row flex-wrap bg-red">
      {menu.map((menu, id) => {
        return (
          <div className="flex flex-row" key={menu.id}>
            <ItemMenu
              id={id}
              name={menu.name}
              price={menu.prince}
              params={{ id: params.id, table: params.table }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;

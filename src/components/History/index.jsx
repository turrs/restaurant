import React from "react";
import ItemHistory from "../ItemHistory";

const History = ({ value }) => {
  return (
    <div className="bg-white w-[100%]">
      {value.order.transaction.map((menu, index) => {
        console.log("nih menu", menu);
        return (
          <div className="p-1 hover:scale-105" key={index}>
            <ItemHistory index={index} menu={menu} />
          </div>
        );
      })}
      <div className="bg-blue flex items-center p-1  bottom-5 w-full ">
        <p className="font-medium text-xs">Total Transaction : </p>
        <p>{value.order.total}</p>
      </div>
    </div>
  );
};

export default History;

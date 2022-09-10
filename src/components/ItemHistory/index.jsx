import React from "react";

const ItemHistory = ({ index, menu }) => {
  console.log("nih", menu);
  return (
    <div className="flex flex-row flex-wrap bg-[#ffffff] p-1 rounded-md border-solid border-black border-[2px] hover:shadow-md hover:shadow-blue">
      <div className="flex w-3/4 items-center">
        <div className="flex items-center flex-col">
          <p className="font-medium text-xs">Transaction {index}</p>
          <p>Table {menu.table}</p>
        </div>
      </div>
      <div className="w-1/4 pl-5">
        <div className="flex items-center flex-col">
          <p className="font-medium text-xs">Total</p>
          <p>{menu.total}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemHistory;

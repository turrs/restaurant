import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button.jsx";

const OrderItems = ({ items, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row bg-[#ffffff] p-1 rounded-md hover:shadow-md hover:shadow-blue">
      <div className="flex w-1/3">
        <p className="text-black font-semibold text-[16px] ">{items.name} </p>
      </div>
      <div className="w-1/3 pl-5 flex flex-row">
        <div className="flex justify-between">
          <p className="text-blue font-extralight">{items.price}</p>
        </div>
      </div>
      <div className="flex w-1/3">
        <div className="">
          <Button
            text="Delete"
            onClick={() => dispatch({ type: "DELETE", index: index })}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItems;

import React from "react";

const TextPrice = ({ price }) => {
  return (
    <div className="flex flex-row p-1">
      <p className="text-blue text-[24px] font-bold">{price}</p>
      <p className="text-gray p-4"> 1 / pcs</p>
    </div>
  );
};

export default TextPrice;

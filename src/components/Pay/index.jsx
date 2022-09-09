import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button.jsx";

const Pay = ({ value }) => {
  console.log("noh value", value.order);
  const [totalPay, setTotalPay] = useState(0);
  const payBilling = e => {
    console.log(e);
  };
  useEffect(() => {}, [value]);
  return (
    <div>
      <div>Meja {value.order.table}</div>
      <p>Menu Item : </p>
      {value.order.menu.map((menu, id) => {
        return (
          <div>
            {menu === "1" ? (
              <p>Coto</p>
            ) : menu === "2" ? (
              <p>Martabak</p>
            ) : (
              <p>Bakso</p>
            )}
          </div>
        );
      })}

      <div>
        <Button text="Pay" onClick={e => payBilling(value.order.menu)}></Button>
      </div>
    </div>
  );
};

export default Pay;

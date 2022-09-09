import React from "react";
import { useSelector } from "react-redux";
import { Pay } from "../../components";
import { FoodMenu } from "../../Parts";

const MainMenu = () => {
  const value = useSelector(state => state);
  return (
    <div>
      <div>
        <FoodMenu />
      </div>
      <div>
        <Pay value={value} />
      </div>
    </div>
  );
};

export default MainMenu;

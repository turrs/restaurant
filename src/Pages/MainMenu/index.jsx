import React, { Suspense } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Pay } from "../../components";
import History from "../../components/History";
import { AppContext } from "../../context";
import { FoodMenu } from "../../Parts";
import { Axios } from "../../Utils";

const MainMenu = () => {
  const value = useSelector(state => state);
  const { fetchMenu, foodData } = useContext(AppContext);
  const { show, setShow } = useContext(AppContext);
  useEffect(() => {
    fetchMenu();
  }, []);
  const setShowFalse = show => {
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
    }
  };
  return (
    <div className="flex flex-row flex-wrap">
      <div className="md:w-4/6">
        <FoodMenu />
      </div>
      <div className="md:w-2/6">
        <div className="p-10">
          {show ? <Pay value={value} /> : <History value={value} />}
        </div>
        <Button
          text={show ? "Show History" : "Close History"}
          onClick={() => setShowFalse(show)}
        />
      </div>
    </div>
  );
};

export default MainMenu;

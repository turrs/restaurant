import React, { Suspense } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Pay } from "../../components";
import History from "../../components/History";
import { AppContext } from "../../context";
import { FoodMenu } from "../../Parts";
import Header from "../../Parts/Header";
import LeftMenu from "../../Parts/LeftMenu";
import { Axios } from "../../Utils";

const MainMenu = () => {
  const value = useSelector(state => state);
  const { fetchMenu, foodData } = useContext(AppContext);
  const { show, setShow, showDekstop, setShowDekstop } = useContext(AppContext);
  useEffect(() => {
    fetchMenu();
  }, []);
  const setShowFalse = (show, showDekstop) => {
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
    }
    if (showDekstop) {
      setShowDekstop(false);
    }
    if (!showDekstop) {
      setShowDekstop(true);
    }
  };
  return (
    <div>
      <div className="h-20 flex items-center">
        <Header />
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="md:w-9/12 flex-row bg-[#cccccc]">
          <div className="flex flex-row">
            <div className="md:w-1/12 bg-white">
              <LeftMenu />
            </div>
            <div className="md:w-11/12">
              <FoodMenu />
            </div>
          </div>
        </div>
        <div className="md:w-3/12">
          <div className="pt-5 flex md:w-full  w-[500px] ">
            {showDekstop && (
              <>
                <div className=" w-full md:block hidden ">
                  <Pay value={value} />
                </div>
              </>
            )}
          </div>
          <div className="pt-5 md:hidden block flex justify-center fixed bottom-0 left-0 right-0">
            <div className="w-[80%] flex justify-center">
              <div>{!show && <Pay value={value}></Pay>}</div>
              <div className="flex justify-center">
                <Button
                  text={show ? "Pay" : "Close"}
                  onClick={() => setShowFalse(show, showDekstop)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

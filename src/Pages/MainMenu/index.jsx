import React, { Suspense } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Pay } from "../../components";
import History from "../../components/History";
import { Badge } from "antd";
import { AppContext } from "../../context";
import { FoodMenu } from "../../Parts";
import Header from "../../Parts/Header";
import LeftMenu from "../../Parts/LeftMenu";
import { Axios } from "../../Utils";

const MainMenu = () => {
  const value = useSelector(state => state);
  const { fetchMenu, foodData } = useContext(AppContext);
  const { show, setShow, showDekstop, setShowDekstop } = useContext(AppContext);
  const [totalData, setTotalData] = useState(4);

  useEffect(() => {
    fetchMenu();
    if (Array.isArray(value.order.menu)) {
      setTotalData(value.order.menu.length);
      console.log("total dataaa", totalData);
    } else {
      setTotalData(0);
      console.log("arr is NOT an array");
    }
  }, [value.order.menu]);
  const setShowFalse = show => {
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
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
            <div className="md:w-1/12 bg-white h-[100vh]">
              <LeftMenu />
            </div>
            <div className="md:w-11/12">
              {value.content === "foodMenu" ? (
                <FoodMenu />
              ) : value.content === "history" ? (
                <History value={value} />
              ) : (
                <p>y</p>
              )}
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
          <div className="pt-5 md:hidden block flex justify-center fixed bottom-5 left-0 right-0">
            <div className="w-[80%] flex justify-center">
              <div>
                {!show && (
                  <>
                    <Pay value={value}></Pay>
                  </>
                )}
              </div>
              <div className="flex justify-center">
                <Badge count={value.order.totalMenu} showZero>
                  <Button
                    text={show ? "Pay" : "Close"}
                    onClick={() => setShowFalse(show)}
                  />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

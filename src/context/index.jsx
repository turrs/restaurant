import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Axios } from "../Utils";
export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ContextWrapper = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [show, setShow] = useState(true);
  const [showDekstop, setShowDekstop] = useState(true);
  const [menuItemData, setMenuItemData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [foodMenuData, setFoodMenuData] = useState([]);
  const fetchMenu = async () => {
    await Axios.get("/food")
      .then(
        function (response) {
          // handle success
          setFoodData(response);
        },
        [foodData]
      )
      .catch(function (error) {
        console.log(error);
        setFoodData([]); // Return empty array in case error response.
      });
  };
  return (
    <AppContext.Provider
      value={{
        setFoodData,
        show,
        setShow,
        foodData,
        fetchMenu,
        showDekstop,
        setShowDekstop,
        menuItemData,
        setMenuItemData,
        valueSearch,
        setValueSearch,
        foodMenuData,
        setFoodMenuData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
ContextWrapper.propTypes = {
  children: PropTypes.object,
};

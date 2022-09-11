import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, text }) => {
  return (
    <div class="flex space-x-2 justify-center" onClick={onClick}>
      <button
        type="button"
        className="inline-block w-full px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded-[25px] shadow-md hover:bg-blue hover:opacity-75 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

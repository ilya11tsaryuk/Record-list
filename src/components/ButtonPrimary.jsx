import React from "react";

// const ButtonPrimary = ({ title, onClick, type = "button" }) => {
const ButtonPrimary = ({onClick, title, type = "button"}) => {
  return (
    <button
      type={type}
      onClick={() => onClick && onClick()}
      className=" flex justify-center items-center px-5 py-1 bg-primary-700 text-white font-semibold rounded-lg text-sm hover:bg-primary-500"
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;

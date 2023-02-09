import React from "react";
import { Link } from "react-router-dom";

const LinkForAdd = () => {
  return (
    <div className=" font-semibold px-2 py-1 m-1 ">
      <Link to={"/add"} className={"hover:underline"}>
        Add Record
      </Link>
    </div>
  );
};

export default LinkForAdd;

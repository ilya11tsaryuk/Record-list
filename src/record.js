import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "./components/ButtonPrimary";

// function Record({ onUpdate, title, description }) {
const Record = ({ deleteRecord, title, description, id, updateRecord }) => {
  let navUpdate = useNavigate();

  return (
    <div className="flex flex-col pl-3 m-1 gap-2">
      <div className=" flex justify-between">
        <h4 className="p-1 font-semibold">{title}</h4>
        <button onClick={() => deleteRecord(id)}>&#10006;</button>
      </div>
      <div className="p-1">{description}</div>
      <div className="">
        <Link to={"/add"}>
          <ButtonPrimary
            title="update"
            onClick={() => {
              // navUpdate("/add");
              updateRecord();
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Record;

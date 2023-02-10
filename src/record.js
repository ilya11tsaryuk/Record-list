import React from "react";
import ButtonPrimary from "./components/ButtonPrimary";

function Record({ onUpdate, title, description }) {
  return (
    <div className="flex flex-col pl-3 m-1 gap-2">
      <div className=" flex justify-between">
        <h4 className="p-1 font-semibold">
          {title}
        </h4>
          <button>&#10006;</button>
      </div>
      <div className="p-1">{description}</div>
      <div className="">
        <ButtonPrimary
          onClick={() => onUpdate(title, description)}
          title={"update"}
        />
      </div>
    </div>
  );
}

export default Record;

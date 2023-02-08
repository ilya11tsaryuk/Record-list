import React from "react";

function Record({ onUpdate, title, description }) {

  return (
    <div className="record">
      <h4 className="title-in-record">
        {title} <button onClick={() => onUpdate(title, description)} className="btn-update">update &#9998;</button>
      </h4>
      <div>{description}</div> 
    </div>
  );
}

export default Record;

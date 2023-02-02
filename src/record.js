import React from "react";

function Record() {

    //это обект id: index, title: ..., discription:...
  return (
    <div className="record">
      <h4 className="title-in-record">
        title <button className="btn-update">update &#9998;</button>
      </h4>
      <div>description</div>
    </div>
  );
}

export default Record;

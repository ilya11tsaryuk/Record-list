import React, { useState } from "react";

function AddRecord({ onClick }) {
  const [value, setValue] = useState("");


  return (
    <div className="box">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button className="add-record" onClick={onCreate(value)}>
        add record
      </button>
    </div>
  );
}

export default AddRecord;

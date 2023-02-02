import React, { useState } from "react";
import slyles from "./slyle.css";
import Record from "./record";
import AddRecord from "./AddRecord";

function App() {

  const [value, setValue] = useState({
    title:
  })

//   const onCreate = (id, value, discription) => {
//     return setState({})
//   }

//описать функцию с состоянием record

  return (
    <div>
      <div className="head">
        <h1>Welcom 'user'</h1>
        <button className="btn-log-in">log in</button>
      </div>
      <h3>My records</h3>
      <AddRecord onCreate />
      <Record />
    </div>
  );
}

export default App;

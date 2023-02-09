import React, { useState } from "react";
import AddRecord from "../AddRecord";
import Header from "../components/Header";
import Record from "../record";

const DashboardPage = () => {
  const [record, setRecord] = useState([]);
  const onCreate = (title, description) => {
    if (title && description) {
      return (
        setRecord((prevvalue) => [...prevvalue, { title, description }]),
        console.log(record)
      );
    } else {
      return;
    }
  };
  return (
    <>
    <Header />
      <div className="head">
        <h1>Welcom 'user'</h1>
        <button className="btn-log-in">log in</button>
      </div>
      <h3>My records</h3>
      <AddRecord onCreate={onCreate} />

      {record.map((item) => {
        return (
          <Record
            // id={item.index + 1}
            key={item.title}
            title={item.title}
            description={item.description}
            // onUpdate={onUpdate}
          />
        );
      })}
    </>
  );
};

export default DashboardPage;

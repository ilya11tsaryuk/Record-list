import React, { useState } from "react";
import AddRecord from "../FormAddRecord";
import Header from "../components/Header";
import Record from "../Record";
import FormAddRecord from "../FormAddRecord";
import LinkForAdd from "../components/LinkForAdd";

const DashboardPage = () => {
  const [record, setRecord] = useState([
    {
      title: "first record",
      description: "this description for fist record",
    },
    {
      title: "second record",
      description: "this description for second record",
    },
  ]);
  const onCreate = (title, description) => {
    if (title && description) {
      return (
        setRecord((prevvalue) => [...prevvalue, { title, description }]),
        console.log(record)
      );
    } else {
      return "Record is not defined";
    }
  };
  return (
    <>
      <Header />
      <h1 className="font-bold text-2xl m-1 p-1">Welcom 'user'</h1>
      <LinkForAdd />
      {/* <FormAddRecord onCreate={onCreate} /> */}
      <h3 className="font-semibold text-xl m-1 p-1 px-2">My records</h3>

      <div className=" grid grid-cols-2">
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
      </div>
    </>
  );
};

export default DashboardPage;

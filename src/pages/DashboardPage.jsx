import React, { useState } from "react";
import AddRecord from "../FormAddRecord";
import Header from "../components/Header";
import Record from "../Record";
import FormAddRecord from "../FormAddRecord";
import LinkForAdd from "../components/LinkForAdd";
import { useRecords } from "../context/RecordsContext";
import { useEffect } from "react";

const DashboardPage = () => {
  
  const {records, getRecords} = useRecords()

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <>
      <Header />
      <h1 className="font-bold text-2xl m-1 p-1">Welcom 'user'</h1>
      <LinkForAdd />
      {/* <FormAddRecord onCreate={onCreate} /> */}
      <h3 className="font-semibold text-xl m-1 p-1 px-2">My records</h3>

      <div className=" grid grid-cols-2 pr-1">
        {records.map((item) => {
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

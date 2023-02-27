import React from "react";
import { useRecords } from "../context/RecordsContext";
import { useEffect } from "react";
import Header from "../components/Header";
import Record from "../Record";
import LinkForAdd from "../components/LinkForAdd";

const DashboardPage = () => {
  const { records, getRecords, deleteRecord, updateRecord } = useRecords();

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <>
      <Header />
      <h1 className="font-bold text-2xl m-1 p-1">Welcome</h1>
      <LinkForAdd />
      {/* <FormAddRecord onCreate={onCreate} /> */}
      <h3 className="font-semibold text-xl m-1 p-1 px-2">My records</h3>

      <div className=" grid grid-cols-2 pr-1">
        {records.map((item) => {
          return (
            <Record
              // id={item.index + 1}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              deleteRecord={deleteRecord}
              updateRecord={updateRecord}
            />
          );
        })}
      </div>
    </>
  );
};

export default DashboardPage;

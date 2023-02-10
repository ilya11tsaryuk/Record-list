import React, { Children, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const RecordsContext = createContext();

export const useRecords = () => useContext(RecordsContext);

const RecordsContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const getRecords = () => {
    if (records?.length) return
    setRecords((prevState) => [
      {
        title: "first record",
        description: "this description for fist record",
      },
      {
        title: "second record",
        description: "this description for second record",
      },
    ]);
  };

  const addRecord = (newRecord) => {
    console.log(newRecord)
    if (newRecord) {
        
       setRecords((prevvalue) => [...prevvalue, newRecord]);
      // console.log(record)
    } else {
      return "Record is not defined";
    }
  };

  return (
    <RecordsContext.Provider
      value={{
        records,
        getRecords,
        addRecord,
      }}
    >
      {children}
    </RecordsContext.Provider>
  );
};

export default RecordsContextProvider;

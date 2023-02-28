import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const RecordsContext = createContext();

export const useRecords = () => useContext(RecordsContext);

// eslint-disable-next-line react/prop-types
const RecordsContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const getRecords = () => {
    if (records?.length) return;
    setRecords(() => [
      // {
      //   id: uuidv4(),
      //   title: "first record",
      //   description: "this description for fist record",
      // },
      // {
      //   id: uuidv4(),
      //   title: "second record",
      //   description: "this description for second record",
      // },
    ]);
  };

  const addRecord = (newRecord) => {
    if (newRecord) {
      setRecords((prevvalue) => [
        {
          id: uuidv4(),
          ...newRecord,
        },
        ...prevvalue,
      ]);
    } else {
      return "Record is not defined";
    }
  };

  const getRecordById = (id) => {
     return records.find((record) => id === record.id)
  }

  const deleteRecord = (id) => {
    return setRecords(records.filter((record) => record.id !== id));
  };

  const updateRecord = (id, title, description) => {
    return console.log(id, title, description);
  };

  // const onUpdate = () => console.log()

  return (
    <RecordsContext.Provider
      value={{
        records,
        getRecords,
        addRecord,
        deleteRecord,
        updateRecord,
        getRecordById,
      }}
    >
      <div>{children}</div>
    </RecordsContext.Provider>
  );
};

export default RecordsContextProvider;

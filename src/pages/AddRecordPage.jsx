import React from "react";
import Header from "../components/Header";
import FormAddRecord from "../FormAddRecord";

const AddRecordPage = () => {
  return (
    <div>
      <Header />
      <FormAddRecord onCreate={console.log("1")} />
    </div>
  );
};

export default AddRecordPage;

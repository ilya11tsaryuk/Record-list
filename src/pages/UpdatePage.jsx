import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import FormAddRecord from "../FormAddRecord";

const UpdatePage = () => {
  let params = useParams();

  return (
    <div>
      <Header />
      <FormAddRecord id={params.id}/>
    </div>
  );
};

export default UpdatePage;

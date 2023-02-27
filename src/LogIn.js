import React from "react";
import { Form } from "react-final-form";
import ButtonPrimary from "./components/ButtonPrimary";
import CustomField from "./components/CustomField";

const LogIn = () => {
  return (
    <Form
      onSubmit={() => console.log("111")} // описать функцию
      //   validate={validate}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={"flex flex-col max-w-md m-auto items-center"}
          // className={"flex p-2 flex-col items-center max-w-md justify-start"}
        >
          {/* <div> */}
          {/* <label>First Name</label> */}
          <CustomField
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <CustomField
            name="password"
            component="input"
            type="password" //????????????????
            placeholder="Password"
          />
          <ButtonPrimary onClick='onSubmit' type="submit" title={"Submit"} />
          {/* </div> */}
        </form>
      )}
    />
  );
};

export default LogIn;

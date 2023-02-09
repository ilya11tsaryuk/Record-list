import React from "react";
import { Form, Field } from "react-final-form";

const LogIn = () => {
  return (
    <Form
      onSubmit={() => console.log('111')} // описать функцию 
      //   validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Simple Default Input</h2>
          <div>
            {/* <label>First Name</label> */}
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
            <Field
              name="password"
              component="input"
              type="password" //????????????????
              placeholder="Password"
            />
          </div>
          <button>submit</button>
        </form>
      )}
    />
  );
};

export default LogIn;

import React from "react";
import { Form, Field } from "react-final-form";

//отрисовать массив

function AddRecord({ onCreate }) {
  return (
    <div className="box">
      <Form
        onSubmit={(values) => onCreate( values.title, values.description)}
        initialValues={{ title: "", description: "" }}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Simple Default Input</h2>
            <div>
              <label></label>
              <Field name="title" component="input" placeholder="Title" />
              <Field
                name="description"
                component="textarea"
                placeholder="textarea"
              />

              <button className="add-record">add record</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default AddRecord;

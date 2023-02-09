import React from "react";
import { Form, Field } from "react-final-form";
import ButtonPrimary from "./components/ButtonPrimary";
import CustomField from "./components/CustomField";

function FormAddRecord({ onCreate }) {
  return (
    <div>
      <Form
        onSubmit={(values) => onCreate(values.title, values.description)}
        initialValues={{ title: "", description: "" }}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-3 items-center gap-4 max-w-lg mx-auto py-5">
              <CustomField
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
              <CustomField
                name="description"
                component="textarea"
                type="text"
                placeholder="Textarea"
              />
              <div className=" self-end py-1">
                <ButtonPrimary title={"add record"} onClick={onCreate} />
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default FormAddRecord;

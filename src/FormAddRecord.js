import React from "react";
import { Form, Field } from "react-final-form";
import ButtonPrimary from "./components/ButtonPrimary";
import CustomField from "./components/CustomField";
import { useRecords } from "./context/RecordsContext";

function FormAddRecord() {

  const {addRecord} = useRecords()

  return (
    <div>
      <Form
      onSubmit={(values) => addRecord(values)}
        // onSubmit={(values) => onCreate(values.title, values.description)}
        initialValues={{ title: "", description: "" }}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-3 items-center gap-3 max-w-lg mx-auto py-5">
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
                <ButtonPrimary title={"add record"} type='submit' />
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default FormAddRecord;

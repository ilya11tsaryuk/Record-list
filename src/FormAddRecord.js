import React from "react";
import { Form } from "react-final-form";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ButtonPrimary from "./components/ButtonPrimary";
import CustomField from "./components/CustomField";
import { useRecords } from "./context/RecordsContext";

function FormAddRecord({ id }) {
  const { addRecord, records, getRecordById } = useRecords();
  let navigate = useNavigate();
  // const params = useParams();

  const note = getRecordById(id);


  return (
    <div>
      <Form
        onSubmit={(values, form) => {
          addRecord(values);
          form.reset();
          navigate("/");
        }}
        initialValues={note ? note : { title: "", description: "" }}
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
              <div className="self-end py-1">
                <ButtonPrimary title={"add record"} type="submit" />
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default FormAddRecord;

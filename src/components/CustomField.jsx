import React from "react";
import { Field } from "react-final-form";

const CustomField = ({name, component, type, placeholder}) => {
  return (
    <Field
      name={name}
      component={component}
      type={type}
      placeholder={placeholder}
      className="p-1 m-1 border border-gray-500 w-full rounded-sm"
    />
  );
};

export default CustomField;

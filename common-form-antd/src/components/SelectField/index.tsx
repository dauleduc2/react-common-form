import { Select } from "antd";
import { FC, PropsWithChildren } from "react";
import { FieldEvents } from "react-common-form-types";

export type SelectFieldProps = FieldEvents & {};

const SelectField: FC<SelectFieldProps> = ({}) => {
  return (
    <Select
      placeholder="Basic usage"
      options={[
        {
          label: "",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
      ]}
    />
  );
};

export default SelectField;

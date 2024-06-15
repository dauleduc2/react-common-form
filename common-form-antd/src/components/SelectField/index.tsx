import { Select } from "antd";
import { FC, PropsWithChildren } from "react";

export type SelectFieldProps = PropsWithChildren<{}>;

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

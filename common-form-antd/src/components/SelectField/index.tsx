import { Select, SelectProps } from "antd";
import { FormValues, SelectFieldProps } from "react-common-form-types";

const SelectField = <T extends FormValues>({
  name,
  extraProps,
  onChange,
}: SelectFieldProps<T, SelectProps, true>) => {
  return (
    <Select
      placeholder="Basic usage"
      onChange={(value) => onChange?.(value as T[keyof T])}
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
      {...extraProps}
    />
  );
};

export default SelectField;

import { Input, InputProps } from "antd";
import { FormValues, TextFieldProps } from "react-common-form-types";

const TextField = <T extends FormValues>({
  onChange,
  extraProps,
}: TextFieldProps<T, InputProps, true>) => {
  return (
    <Input
      onChange={(e) => onChange?.(e.target.value as T[keyof T])}
      {...extraProps}
    />
  );
};

export default TextField;

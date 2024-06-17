import { Input, InputProps } from "antd";
import { FC } from "react";
import { FieldEvents } from "react-common-form-types";

export type TextFieldProps = FieldEvents &
  Omit<InputProps, "onChange" | "onBlur"> & {};

const TextField: FC<TextFieldProps> = ({ onChange, ...rest }) => {
  return (
    <Input
      placeholder="Basic usage"
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
};

export default TextField;

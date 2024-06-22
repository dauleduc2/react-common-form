import {
  FormComponents,
  FormValues,
  SelectFieldProps,
  TextFieldProps,
} from "react-common-form-types";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { FC } from "react";
import { InputProps, SelectProps } from "antd";

const AntdComponents = <T extends FormValues>(): FormComponents<
  SelectFieldProps<T, SelectProps, true>,
  TextFieldProps<T, InputProps, true>
> => ({
  TextField: TextField as FC<SelectFieldProps<T, SelectProps, true>>,
  SelectField: SelectField as FC<TextFieldProps<T, InputProps, true>>,
});

export { AntdComponents };

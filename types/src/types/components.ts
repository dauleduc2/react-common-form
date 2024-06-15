import { FC } from "react";

export type FormComponents<
  TextFieldProps = unknown,
  SelectFieldProps = unknown
> = {
  TextField: FC<TextFieldProps>;
  SelectField: FC<SelectFieldProps>;
};

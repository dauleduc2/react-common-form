import { FC } from "react";

export type AvailableFormValues =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]
  | undefined;

export type FieldEvents<T extends AvailableFormValues = AvailableFormValues> = {
  onChange: (value: T) => void;
};

export type FormComponents<
  TextFieldProps extends FieldEvents = FieldEvents,
  SelectFieldProps extends FieldEvents = FieldEvents
> = {
  TextField: FC<TextFieldProps>;
  SelectField: FC<SelectFieldProps>;
};

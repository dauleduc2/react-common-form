import { BaseFieldProps } from "../../types/field";
import { FormValues } from "../../types";
import { useFormContext } from "./context";

export type TextFieldProps<T extends FormValues> = BaseFieldProps<T> & {};

export const TextField = <T extends FormValues>({}: TextFieldProps<T>) => {
  const { components } = useFormContext<T>();
  const Component = components.TextField;
  return <Component />;
};

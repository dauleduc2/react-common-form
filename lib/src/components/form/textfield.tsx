import { BaseFieldProps } from "../../types/field";
import { FormValues } from "../../types";
import { useFormContext } from "./context";
import { AvailableFormValues } from "react-common-form-types";

export type TextFieldProps<T extends FormValues> = BaseFieldProps<T> & {};

export const TextField = <T extends FormValues>({
  name,
}: TextFieldProps<T>) => {
  const { components, methods } = useFormContext<T>();
  const Component = components.TextField;

  const onChange = (value: AvailableFormValues) => {
    methods.setValue(name, value as T[keyof T]);
  };

  return <Component onChange={onChange} />;
};

import { FormValues } from "./FormMethods";

export type BaseFieldProps<T extends FormValues> = {
  name: keyof T;
};

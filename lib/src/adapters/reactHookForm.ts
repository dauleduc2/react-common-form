import { FormMethods } from "react-common-form-types";
import { FieldErrors, FieldValues, Path, UseFormReturn } from "react-hook-form";

//TODO: create a nested PathInto and convert it to name of react-hook-form
const nameParser = <T extends FieldValues>(name: keyof T): Path<T> => {
  return name as Path<T>;
};

export const reactHookFormAdapter = <T extends FieldValues = any>(
  methods: UseFormReturn<T>
): FormMethods<T, FieldErrors> => {
  return {
    clearErrors: methods.clearErrors,
    getError: (name) => methods.formState.errors[name],
    getErrors: () => methods.formState.errors,
    getValue: (name) => methods.getValues(nameParser(name)),
    reset: methods.reset,
    setError: (name, error) =>
      methods.setError(nameParser(name) as Path<T>, error),
    getValues: methods.getValues,
    setValue: (name, value) => methods.setValue(name as any, value),
  };
};

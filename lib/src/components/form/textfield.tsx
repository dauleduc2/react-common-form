import type { FormValues, TextFieldProps } from "react-common-form-types";
import { useFormContext } from "./context";

export const TextField = <T extends FormValues, K>({
  name,
  onChange,
  extraProps,
}: TextFieldProps<T, K, true>) => {
  const { components, methods } = useFormContext<T>();
  const Component = components.TextField as React.FC<
    TextFieldProps<T, K, false>
  >;

  const _onChange = (value: T[keyof T]) => {
    methods.setValue(name, value);
    onChange?.(value);
  };

  return <Component name={name} {...extraProps} onChange={_onChange} />;
};

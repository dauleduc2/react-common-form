import { FC } from "react";
import { FormValues } from "./form";

export type FieldEvents<T extends FormValues = FormValues> = {
  onChange: (value: T[keyof T]) => void;
};

export type FieldProps<T extends FormValues = FormValues> = Partial<
  FieldEvents<T>
> &
  BaseFieldProps<T>;

type WithExtraFieldProps<
  T,
  shouldInclude extends boolean
> = shouldInclude extends true
  ? {
      extraProps?: Partial<T>;
    }
  : unknown;

export type TextFieldProps<
  T extends FormValues = FormValues,
  K = any,
  shouldInclude extends boolean = true
> = FieldProps<T> & WithExtraFieldProps<K, shouldInclude>;

export type SelectFieldProps<
  T extends FormValues = FormValues,
  K = any,
  shouldInclude extends boolean = true
> = FieldProps<T> & WithExtraFieldProps<K, shouldInclude>;

export type FormComponents<T, K> = {
  TextField: FC<T>;
  SelectField: FC<K>;
};

export type BaseFieldProps<T extends FormValues> = {
  name: keyof T;
};

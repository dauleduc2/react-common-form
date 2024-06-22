import { FormComponents, SelectFieldProps, TextFieldProps } from "./components";
import { SupportedUILibrary } from "./config";

export type FormValues<T extends Record<string, AvailableFormValues> = any> = T;
export type FormError = string | undefined;
export type ErrorState<T extends FormValues> = Partial<
  Record<keyof T, FormError>
>;

export type AvailableFormValues =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]
  | undefined;

export type FormMethods<
  T extends FormValues = any,
  IErrorState = any,
  ErrorField = any
> = {
  getValues: () => T;
  getValue: <K extends keyof T>(name: K) => T[K];
  setValue: <K extends keyof T>(name: K, value: T[K]) => void;
  getError: <K extends keyof T>(name: K) => ErrorField;
  getErrors: () => IErrorState;
  setError: <K extends keyof T>(name: K, error: ErrorField) => void;
  clearErrors: () => void;
  reset: () => void;
};
export type FormContext<
  T extends FormValues = any,
  TProps = any,
  SProps = any
> = {
  methods: FormMethods<T>;
  ui: SupportedUILibrary;
  components: FormComponents<
    TextFieldProps<T, TProps>,
    SelectFieldProps<T, SProps>
  >;
};

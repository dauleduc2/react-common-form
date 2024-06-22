import { ReactNode, createContext, useContext, useMemo } from "react";
import type {
  FormComponents,
  FormContext,
  FormValues,
  SelectFieldProps,
  TextFieldProps,
} from "react-common-form-types";

export const FormCtx = createContext<FormContext>({} as FormContext);

export type FormProviderProps<
  T extends FormValues = any,
  FText = any,
  FSelect = any
> = FormContext<T, FText, FSelect> & {
  children: (
    components: FormComponents<
      TextFieldProps<T, FText>,
      SelectFieldProps<T, FSelect>
    >
  ) => JSX.Element | ReactNode | undefined;
};

export const FormProvider = <
  T extends FormValues = any,
  FText = any,
  FSelect = any
>({
  children,
  methods,
  ui,
  components,
}: Readonly<FormProviderProps<T, FText, FSelect>>) => {
  const providerValues = useMemo<FormContext<T, FText, FSelect>>(() => {
    return {
      methods,
      ui,
      components,
    };
  }, [methods, ui, components]);

  return (
    <FormCtx.Provider value={providerValues}>
      {children(components)}
    </FormCtx.Provider>
  );
};

export const useFormContext = <T extends FormValues = any>() => {
  return useContext(FormCtx) as FormContext<T>;
};

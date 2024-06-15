import { PropsWithChildren, createContext, useContext, useState } from "react";
import { FormContext, FormValues } from "../../types/FormMethods";

export const FormCtx = createContext<FormContext>({} as FormContext);

export type FormProviderProps<T extends FormValues = any> = PropsWithChildren &
  FormContext<T>;

export const FormProvider = <T extends FormValues = any>({
  children,
  methods,
  ui,
  components,
}: Readonly<FormProviderProps<T>>) => {
  return (
    <FormCtx.Provider
      value={{
        methods,
        ui,
        components,
      }}
    >
      {children}
    </FormCtx.Provider>
  );
};

export const useFormContext = <T extends FormValues = any>() => {
  return useContext(FormCtx) as FormContext<T>;
};

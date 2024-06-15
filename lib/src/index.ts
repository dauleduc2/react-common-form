import { FormProvider, TextField } from "./components/form";
import {
  UIMethods,
  FormValues,
  FormMethods,
  ErrorState,
  FormContext,
  FormError,
} from "./types";
import { reactHookFormAdapter } from "./adapters";
export type {
  UIMethods,
  FormValues,
  FormMethods,
  ErrorState,
  FormContext,
  FormError,
};
export { FormProvider, TextField, reactHookFormAdapter };

export default { FormProvider, TextField, reactHookFormAdapter };

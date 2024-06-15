import { FormComponents } from "react-common-form-types";
import TextField, { TextFieldProps } from "./TextField";
import SelectField, { SelectFieldProps } from "./SelectField";

const AntdComponents: FormComponents<TextFieldProps, SelectFieldProps> = {
  TextField: TextField,
  SelectField: SelectField,
};

export { AntdComponents };

import { Input } from "antd";
import { FC } from "react";

export interface TextFieldProps {}

const TextField: FC<TextFieldProps> = () => {
  return <Input placeholder="Basic usage" />;
};

export default TextField;

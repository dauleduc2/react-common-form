import React, { InputHTMLAttributes } from "react";

type DefaultHTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

export type UIMethods = DefaultHTMLInputProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

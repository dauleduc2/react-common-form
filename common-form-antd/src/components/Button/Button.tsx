import React, { FC, useState } from "react";

import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

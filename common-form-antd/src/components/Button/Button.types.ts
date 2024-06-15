import { MouseEventHandler } from "react";
export interface ButtonProps {
  type: "primary" | "secondary" | "error";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

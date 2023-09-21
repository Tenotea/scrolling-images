import { ButtonHTMLAttributes } from "react";

export namespace BaseButton {
  export type ViewProps = Omit<ButtonHTMLAttributes<HTMLElement>, "className">;
}

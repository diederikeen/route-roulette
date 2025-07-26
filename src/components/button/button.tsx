import { ReactNode } from "react";

import styles from "./button.module.css";
import clsx from "clsx";

interface Props {
  onClick: () => void;
  type?: "button" | "submit";
  children: ReactNode;
  classNames?: [string];
}

export function Button({ onClick, type = "button", children }: Props) {
  return (
    <button className={clsx(styles.button)} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

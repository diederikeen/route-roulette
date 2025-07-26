import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./card.module.css";

interface Props {
  children: ReactNode;
  classNames?: string[];
  padding?: "sm" | "md" | "lg" | "xlg";
}

const paddingMap = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xlg: styles.xlg,
};

export function Card({ children, classNames = [], padding = "md" }: Props) {
  return (
    <div className={clsx(styles.card, paddingMap[padding], ...classNames)}>
      {children}
    </div>
  );
}

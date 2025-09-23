import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  type?: "button" | "submit";
  children: ReactNode;
  classNames?: string;
}

export function Button({
  onClick,
  type = "button",
  children,
  classNames = "",
}: Props) {
  return (
    <button
      className={clsx(
        "px-6 bg-amber-500 text-white py-2 rounded-xs uppercase text-xs hover:bg-amber-600 transition-all hover:cursor-pointer",
        classNames,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

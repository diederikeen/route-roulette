import { HTMLInputTypeAttribute } from "react";
import styles from "./input.module.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export function Input({
  onChange,
  name,
  type = "text",
  label,
  placeholder,
  required,
}: Props) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

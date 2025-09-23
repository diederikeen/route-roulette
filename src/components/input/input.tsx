import { HTMLInputTypeAttribute } from "react";

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
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-400 mb-1 text-xs uppercase font-semibold"
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-200 px-2 h-[2rem] rounded-xs w-full"
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

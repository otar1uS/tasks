import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={rest.id}
        className="block text-gray-900 text-sm font-medium mb-2"
      >
        {label}
      </label>
      <input
        {...rest}
        className="w-full p-2  outline-none placeholder:text-gray-400  border-[1px] border-gray-400 focus:border-gray-900 focus:border-[2px]  text-gray-900 rounded"
      />
    </div>
  );
};

export default Input;

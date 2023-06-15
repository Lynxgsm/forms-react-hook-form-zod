import { ComponentProps, FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { clsx } from "clsx";

type InputProps = ComponentProps<"input"> & {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
};

const Input: FC<InputProps> = ({ label, register, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={props.name}>{label}</label>
    <input
      {...props}
      {...register}
      aria-invalid={!!error}
      className={clsx(
        "border-[1px]",
        error ? "border-red-600" : "border-neutral-600",
        "focus:outline-none",
        "visited:bg-transparent",
        "p-2 rounded-md"
      )}
    />
    {error && <p className="text-xs text-red-600 my-1">{error}</p>}
  </div>
);

export default Input;

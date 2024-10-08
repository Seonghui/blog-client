import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

const _Input = (
  {
    name,
    errors = [],
    ...rest
  }: InputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col">
      <input
        ref={ref}
        name={name}
        className="bg-transparent px-4 rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-black border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 text-left">
          {error}
        </span>
      ))}
    </div>
  );
};

export default forwardRef(_Input);

import React from "react";

export default function Input({
  input,
  setInput,
  placeholder,
  className,
  ...rest
}: {
  input: string;
  setInput: (value: string) => void;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder={placeholder}
      className={
        "duration-200 bg-[rgba(255,255,255,0.1)] outline-none border-[1px] border-[rgba(255,255,255,0.2)] focus:border-[2px] focus:border-[rgba(255,255,255,1)] rounded-[10px] text-center md:h-[45px] md:max-w-[580px] w-full max-w-[350px] h-[30px] text-[#E0E0E0] md:text-[1rem] text-[0.75rem] font-[Poppins] font-normal " +
        className
      }
      {...rest}
    />
  );
}

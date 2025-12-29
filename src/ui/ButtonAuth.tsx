"use client";

import clsx from "clsx";
import { ReactNode } from "react";

type ButtonAuthProps = {
  children: ReactNode;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonAuth({ onClick, className, children, isActive = false, ...props }: ButtonAuthProps) {
  return (
    <button
      type="button"
      className={clsx(
        "bg-[rgba(0,0,0,0.8)] rounded-[12px] duration-200 cursor-pointer px-12 py-2 font-medium",
        isActive
          ? "border border-white border-b-2 border-b-[#FFD500] text-[#FFD500] shadow-[0_0_12px_rgba(255,213,0,0.4)] text-shadow-[0_0_10px_rgba(255,213,0,1)]"
          : "border border-white text-white shadow-[0_0_40px_rgba(0,210,255,0.15),inset_0_0_20px_rgba(255,79,216,0.05)]",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}

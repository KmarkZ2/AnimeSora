import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "neon-pink" | "neon-blue" | "filter";
  isLoading?: boolean;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  onClick,
  variant,
  className,
  children,
  disabled,
  isLoading = false,
  isActive = false,
  ...props
}: ButtonProps) {
  const variants = {
    "neon-pink":
      "font-bold text-[1rem] py-[30px] px-[20px] border-[#00D2FF] box-shadow-[0_0_20px_0_#00D2FF] hover:box-shadow-[0_0_30px_0_#00D2FF] hover:bg-[#00D2FF]",
    "neon-blue":
      "font-bold text-[1rem] py-[30px] px-[20px] border-[#FF4FD8] box-shadow-[0_0_20px_0_#FF4FD8] hover:box-shadow-[0_0_30px_0_#FF4FD8] hover:bg-[#FF4FD8]",
    filter: clsx(
      "text-[14px] py-[7px] px-[15px] border box-border",
      isActive
        ? [
            "text-white",
            "border-transparent",
            "bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(90deg,#00D2FF,#FF4FD8)]",
            "bg-origin-[padding-box,border-box]",
            "bg-clip-[padding-box,border-box]",
            "shadow-[0_0_10px_rgba(255,79,216,0.2)]",
          ]
        : [
            "bg-transparent",
            "border-[rgba(255,255,255,0.10)]",
            "text-[#A0A0A0]",
            "hover:border-white/30 hover:text-white",
          ]
    ),
  };

  return (
    <button
      type="button"
      className={clsx("bg-transparent border-2 rounded-[50px] duration-150", variant && variants[variant])}
      onClick={onClick}
      disabled={isLoading || disabled}
      {...props}
    >
      {children}
    </button>
  );
}

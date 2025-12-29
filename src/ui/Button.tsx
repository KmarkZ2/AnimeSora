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
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    "neon-pink":
      "font-bold text-[1rem] py-[15px] px-[25px] border-2 border-[#FF4FD8] text-white shadow-[0_0_20px_0_#FF4FD8] hover:shadow-[0_0_30px_0_#FF4FD8] hover:bg-[#FF4FD8] hover:text-[#3F3F3F] min-w-[120px]",
    "neon-blue":
      "font-bold text-[1rem] py-[15px] px-[25px] border-2 border-[#00D2FF] text-white shadow-[0_0_20px_0_#00D2FF] hover:shadow-[0_0_30px_0_#00D2FF] hover:bg-[#00D2FF] hover:text-[#3F3F3F] min-w-[120px]",
    filter: clsx(
      "text-[14px] py-[7px] px-[15px] min-w-[80px]",
      isActive
        ? [
            "text-white",
            "border-[2px]",
            "bg-[linear-gradient(#121212,#121212),linear-gradient(90deg,#00D2FF,#FF4FD8)]",
            "bg-origin-[padding-box,border-box]",
            "bg-clip-[padding-box,border-box]",
            "shadow-[0_0_20px_0_rgba(255,79,216,0.5)]",
          ]
        : ["bg-transparent", "border border-white/10", "text-white/60", "hover:border-white/30 hover:text-white", "shadow-none"]
    ),
  };

  return (
    <>
      {variant === "filter" ? (
        <button
          className={clsx(
            "group rounded-full p-[2px] w-[150px] duration-200 ",
            className,
            isActive
              ? "bg-gradient-to-r from-[#00D2FF] to-[#FF4FD8] shadow-[0_0_20px_0_rgba(255,79,216,0.5)]"
              : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]",
            disabled && " opacity-50"
          )}
          onClick={onClick}
          disabled={isLoading || disabled}
          {...props}
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] px-5 py-2.5 text-[14px] font-medium text-white transition-all group-active:scale-95">
            {children}
          </span>
        </button>
      ) : (
        <button
          className={clsx(
            "bg-transparent rounded-[50px] duration-200 cursor-pointer",
            variant && variants[variant],
            disabled && " opacity-50 ",
            className
          )}
          onClick={onClick}
          disabled={isLoading || disabled}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

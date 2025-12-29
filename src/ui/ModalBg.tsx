import { ReactNode } from "react";

export default function ModalBg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={
        "bg-[rgba(18,18,18,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[10px] w-full backdrop-blur-[20px] " +
        className
      }
    >
      {children}
    </div>
  );
}

"use client";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

export default function SelectButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-2.5 py-0.5 max-w-[250px] w-auto h-[60px] flex items-center justify-center gap-2.5 bg-transparent border border-[rgba(255,255,255,0.6)] rounded-2xl"
    >
      <span className="text-center text-white font-medium text-[14px] line-clamp-1">{text}</span>
      <IoIosArrowDown className={clsx("w-6 h-6 text-white")} />
    </button>
  );
}

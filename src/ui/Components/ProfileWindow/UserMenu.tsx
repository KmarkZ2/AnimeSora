"use client";

import { RxPerson } from "react-icons/rx";
import ProfileWindow from "./ProfileWindow";
import clsx from "clsx";
import ModalBg from "@/ui/ModalBg";
import useProfileWindowStore from "@/store/useProfileWindowStore";

export default function UserMenu({}) {
  const { isOpen, openWindow, closeWindow } = useProfileWindowStore();

  return (
    <div className="relative">
      {isOpen && <div className="fixed inset-0 z-40" onClick={closeWindow}></div>}
      <button type="button" className="cursor-pointer" onClick={openWindow}>
        <RxPerson className="w-8 h-8 text-white" />
      </button>
      <div
        className={clsx(
          "duration-200 absolute top-[calc(100%+10px)] right-0 w-[300px] transition-all ease-in-out z-50",
          isOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"
        )}
      >
        <ModalBg className="p-2.5">
          <ProfileWindow />
        </ModalBg>
      </div>
    </div>
  );
}

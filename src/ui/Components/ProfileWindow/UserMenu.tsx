"use client";

import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import ProfileWindow from "./ProfileWindow";
import clsx from "clsx";
import ModalBg from "@/ui/ModalBg";

export default function UserMenu({}) {
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {profileIsOpen && <div className="fixed inset-0 z-40" onClick={() => setProfileIsOpen((prev) => !prev)}></div>}
      <button type="button" className="cursor-pointer" onClick={() => setProfileIsOpen((prev) => !prev)}>
        <RxPerson className="w-8 h-8 text-white" />
      </button>
      <div
        className={clsx(
          "duration-200 absolute top-[calc(100%+10px)] right-0 w-[300px] transition-all ease-in-out z-50",
          profileIsOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"
        )}
      >
        <ModalBg className="p-2.5">
          <ProfileWindow />
        </ModalBg>
      </div>
    </div>
  );
}

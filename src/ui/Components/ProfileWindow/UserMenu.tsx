"use client";

import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import BGBlock from "../../BGBlock";
import ProfileWindow from "./ProfileWindow";
import clsx from "clsx";

export default function UserMenu({}) {
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button type="button" onClick={() => setProfileIsOpen((prev) => !prev)}>
        <RxPerson className="w-4 h-4" />
      </button>
      <div className={clsx("hidden duration-150 top-[calc(100%+10px)] right-0 w-60", profileIsOpen ?? "block")}>
        <BGBlock>
          <ProfileWindow />
        </BGBlock>
      </div>
    </div>
  );
}

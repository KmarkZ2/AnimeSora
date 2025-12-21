"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import ProfileWindow from "../ProfileWindow/ProfileWindow";
import { User } from "@/types/types";
import AuthButton from "../AuthButtons/AuthButton";

export default function Nav({ user }: { user: User | null }) {
  return (
    <nav className="flex z-[5] items-center md:h-[105px] h-[75px] justify-between pl-[5px] pr-[5px] md:pl-[50px] md:pr-[50px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-b-[10px]">
      <Link href={"/"} className="flex-1">
        <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold md:text-[1.75rem] text-[1rem]">AnimeSora</h2>
      </Link>
      <NavLinks className="flex-2" />
      <div className="flex-1">{user ? <ProfileWindow /> : <AuthButton />}</div>
    </nav>
  );
}

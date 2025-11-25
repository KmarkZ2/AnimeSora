"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = {
  navbar: [
    { href: "/", label: "News" },
    { href: "/search", label: "Search" },
    { href: "/random", label: "Random" },
  ],
  profile: [
    { href: "/profile", label: "Profile" },
    { href: "/addNews", label: "Add News" },
  ],
};

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className }: NavLinksProps) {
  const path = usePathname();

  return (
    <div
      className={
        "flex md:gap-[50px] gap-[10px] items-center justify-center " + className
      }
    >
      {Links.navbar.map((el) => (
        <Link
          href={el.href}
          key={el.label}
          className={`md:text-[1.5rem] text-[0.75rem] font-[Orbitron] font-bold hover:text-[#FFFFFF] transition-[200ms] ${
            path === el.href ? "text-[#FFD500]" : "text-[#B0B0B0]"
          }`}
        >
          {el.label}
        </Link>
      ))}
    </div>
  );
}

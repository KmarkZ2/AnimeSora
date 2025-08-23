"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/", label: "News" },
  { href: "/genre", label: "Genre" },
  { href: "/random", label: "Random" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="flex sticky top-[0] z-[5] items-center h-[105px] justify-between pl-[50px] pr-[50px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-b-[10px]">
      <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold text-[1.75rem]">
        AnimeSora
      </h2>
      <div className="flex gap-[50px] items-center justify-center">
        {Links.map((el) => (
          <Link
            href={el.href}
            key={el.label}
            className={`text-[1.5rem] font-[Orbitron] font-bold hover:text-[#FFFFFF] transition-[200ms] ${
              path === el.href ? "text-[#FFD500]" : "text-[#B0B0B0]"
            }`}
          >
            {el.label}
          </Link>
        ))}
      </div>
      <h2 className="text-[#E0E0E0] font-[NotoSansJP] font-bold text-[1.75rem]">
        アニメ空
      </h2>
    </nav>
  );
}

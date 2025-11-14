"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = {
  navbar: [
    { href: "/", label: "News" },
    { href: "/genre", label: "Genre" },
    { href: "/random", label: "Random" },
  ],
  profile: [
    { href: "/profile", label: "Profile" },
    { href: "/addNews", label: "Add News" },
  ],
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  return (
    <nav className="flex sticky top-[0] z-[5] items-center md:h-[105px] h-[75px] justify-between pl-[5px] pr-[5px] md:pl-[50px] md:pr-[50px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-b-[10px]">
      <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold md:text-[1.75rem] text-[1rem]">
        AnimeSora
      </h2>
      <div className="flex md:gap-[50px] gap-[10px] items-center justify-center">
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

      <div className="w-auto relative">
        <button
          type="button"
          className="flex flex-col md:gap-y-1.5 cursor-pointer md:w-7"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={clsx(
              "before:content-[''] ",
              !isOpen ? "before:scale-x-100" : "before:scale-x-50",
              " before:h-0.5 before:bg-white before:block before:duration-200 before:origin-center"
            )}
          ></span>
          <span
            className={clsx(
              "before:content-[''] ",
              !isOpen ? "before:scale-x-100" : "before:scale-x-50",
              " before:h-0.5 before:bg-white before:block before:duration-200"
            )}
          ></span>
          <span
            className={clsx(
              "before:content-[''] ",
              !isOpen ? "before:scale-x-100" : "before:scale-x-50",
              " before:h-0.5 before:bg-white before:block before:duration-200"
            )}
          ></span>
        </button>
        <div
          className={clsx(
            "absolute flex flex-col md:gap-y-5 md:top-20 md:-left-30 bg-[#121212d9] w-auto h-auto text-[#E0E0E0] md:p-4 rounded-[10px] duration-200 border-[5px] border-[#121212]",
            isOpen ? "scale-x-100" : "scale-x-0"
          )}
        >
          <h2 className="font-[Poppins] font-normal md:text-2xl">user_name</h2>
          <div className="flex flex-col items-center">
            {Links.profile.map((el) => (
              <Link
                href={el.href}
                className=""
                onClick={() => setIsOpen(false)}
              >
                {el.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

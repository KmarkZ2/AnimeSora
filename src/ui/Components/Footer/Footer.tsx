import Link from "next/link";

import Contacts from "./Contacts";

export default function Footer() {
  return (
    <footer className="flex items-center md:h-[200px] h-[100px] justify-between md:pl-[50px] md:pr-[50px] pl-[5px] pr-[5px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-t-[10px]">
      <Link href={"/"}>
        <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold md:text-[1.75rem] text-[0.75rem]">
          AnimeSora
        </h2>
      </Link>
      <Contacts />
      <Link href={"/"}>
        <h2 className="text-[#E0E0E0] font-[NotoSansJP] font-bold md:text-[1.75rem] text-[0.75rem]">
          アニメ空
        </h2>
      </Link>
    </footer>
  );
}

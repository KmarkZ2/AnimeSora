import Link from "next/link";

export default function ProfileWindow() {
  return (
    <ul className="flex flex-col w-full text-[1rem] text-white font-[Poppins] font-normal">
      <li className="border-b border-white hover:text-#FFD500]">
        <Link href={"/profile"}>Profile</Link>
      </li>
      <li className="hover:text-#FFD500]">
        <Link href={"/admin"}>Admin Panel</Link>
      </li>
    </ul>
  );
}

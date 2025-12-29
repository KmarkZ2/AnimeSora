"use client";

import { userLogout } from "@/actions";
import useUserStore from "@/store/useUserStore";
import { UserWithProfile } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IconType } from "react-icons";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function ProfileWindow() {
  const user = useUserStore((store) => store.user)!;

  const onLogout = async () => {
    await userLogout();
    redirect("/");
  };

  return (
    <div className="w-full flex flex-col text-[1rem] text-white font-normal">
      <ProfileInfoItem user={user} />
      <MenuDivider />
      <ProfileWindowListContainer>
        <ProfileWindowItem icon={IoPersonCircleOutline} text="Account" href="/profile" />
        <ProfileWindowItem icon={IoPersonCircleOutline} text="Settings" href="/settings" />
      </ProfileWindowListContainer>
      <MenuDivider />
      <ProfileWindowListContainer>
        <ProfileWindowItem icon={IoPersonCircleOutline} text="Help" href="/help" />
      </ProfileWindowListContainer>
      <MenuDivider />
      <ProfileWindowListContainer>
        <ProfileWindowItem icon={IoPersonCircleOutline} text="Log out" onClick={onLogout} />
      </ProfileWindowListContainer>
    </div>
  );
}

function ProfileWindowItem({
  icon: Icon,
  text,
  href,
  onClick,
}: {
  icon: IconType;
  text: string;
  href?: string;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <Link href={href}>
        <li className="p-2.5 bg-transparent text-white flex items-center gap-2.5 hover:bg-[rgba(186,186,186,0.1)] rounded-[3px]">
          <Icon className="w-6 h-6" />
          {text}
        </li>
      </Link>
    );
  }
  return (
    <li
      onClick={onClick}
      className="cursor-pointer p-2.5 bg-transparent text-white flex items-center gap-2.5 hover:bg-[rgba(186,186,186,0.1)] rounded-[3px]"
    >
      <Icon className="w-6 h-6" />
      {text}
    </li>
  );
}

function ProfileInfoItem({ user }: { user: UserWithProfile }) {
  return (
    <div className="p-2.5 bg-transparent text-white flex items-center gap-2.5">
      {user?.profile?.avatar_url ? (
        <Image src={user?.profile?.avatar_url} alt="Avatar" width={48} height={48} className="rounded-full" />
      ) : (
        <IoPersonCircleOutline className="w-12 h-12" />
      )}
      <div className="flex flex-col w-full ">
        <span className="font-normal">{user?.profile?.full_name || user?.profile?.username}</span>
        <span className="font-normal text-[12px] text-[rgba(255,255,255,0.2)]">{user?.profile?.email}</span>
      </div>
    </div>
  );
}

function ProfileWindowListContainer({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col w-full">{children}</ul>;
}

function MenuDivider() {
  return <div className="h-[1px] bg-[rgba(255,255,255,0.1)] w-full my-2 rounded-full" />;
}

"use client";

import useUserStore from "@/store/useUserStore";
import { UserWithProfile } from "@/types/types";
import Button from "@/ui/Button";
import ModalBg from "@/ui/ModalBg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import ChangeInfo from "./ChangeInfo";
import clsx from "clsx";

type ProfileContentProps = {
  initialData: UserWithProfile;
};

export default function ProfileContent({ initialData }: ProfileContentProps) {
  const { clearUser, setUser, user } = useUserStore();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    }
  }, [initialData, setUser]);

  const profile = user?.profile || initialData.profile;

  return (
    <div className="w-[800px] relative">
      <ChangeInfo setIsEditing={setIsEditing} isEditing={isEditing} />
      <ModalBg className="px-[50px] py-[30px]">
        <div className="font-normal flex items-center gap-8 text-white w-full">
          <div className="flex flex-col items-center gap-2.5 shrink-0">
            {profile?.avatar_url ? (
              <Image src={profile?.avatar_url} alt="Avatar" className="rounded-full object-cover" width={150} height={150} />
            ) : (
              <IoPersonCircleOutline className="text-white w-[150px] h-[150px] rounded-full" />
            )}
            <div className="text-center">
              <h1 className="font-bold text-lg">{profile?.full_name}</h1>
              <p className="text-[rgba(255,255,255,0.3)]">@{profile?.username}</p>
            </div>
          </div>

          <div className="flex-1 min-w-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[1rem]">
            <span className="text-[rgba(255,255,255,0.3)] text-right">Full name:</span>
            <span className="text-white font-medium truncate">{profile?.full_name}</span>

            <span className="text-[rgba(255,255,255,0.3)] text-right">Username:</span>
            <span className="text-white font-medium truncate">@{profile?.username}</span>

            <span className="text-[rgba(255,255,255,0.3)] text-right">Email:</span>
            <span className="text-white font-medium truncate min-w-0" title={profile?.email || ""}>
              {profile?.email}
            </span>
          </div>

          <div className="shrink-0 self-end">
            <Button
              variant="neon-blue"
              onClick={() => setIsEditing(true)}
              className="whitespace-nowrap px-6" // Додай px-6 для ширини кнопки
            >
              Change info
            </Button>
          </div>
        </div>
      </ModalBg>
    </div>
  );
}

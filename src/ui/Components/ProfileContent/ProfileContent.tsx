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
      <div
        className={clsx(
          "duration-200 fixed top-[150px] left-1/2 -translate-x-1/2 transition-all ease-in-out z-50 w-[700px]",
          isEditing ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"
        )}
      >
        <ChangeInfo setIsEditing={setIsEditing} />
      </div>
      <ModalBg className=" px-[50px] py-[30px] ">
        <div className="font-normal flex items-center gap-8 text-white">
          <div className="flex flex-col items-center gap-2.5">
            {profile?.avatar_url ? (
              <Image
                src={profile?.avatar_url}
                alt="Avatar"
                className="rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.25)] bg-center bg-contain"
                width={200}
                height={200}
              />
            ) : (
              <IoPersonCircleOutline className="text-white w-[200px] h-[200px] rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.25)]" />
            )}
            <div>
              <h1 className="text-center font-[24px]">{profile?.full_name}</h1>
              <p className="text-center font-[24px] text-[rgba(255,255,255,0.1)]">@{profile?.username}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] w-max font-[1rem]">
            <div>
              <label className="text-[rgba(255,255,255,0.3)]">Full name: </label>
              <span className="text-white ml-1">{profile?.full_name}</span>
            </div>
            <div>
              <label className="text-[rgba(255,255,255,0.3)]">Username: </label>
              <span className="text-white ml-1">@{profile?.username}</span>
            </div>
            <div>
              <label className="text-[rgba(255,255,255,0.3)]">Email: </label>
              <span className="text-white ml-1">{profile?.email}</span>
            </div>
          </div>
          <Button variant="neon-blue" className="mx-auto self-end" onClick={() => setIsEditing(true)}>
            Change info
          </Button>
        </div>
      </ModalBg>
    </div>
  );
}

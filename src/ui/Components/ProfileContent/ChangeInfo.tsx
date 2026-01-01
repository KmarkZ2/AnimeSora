"use client";

import { updateUser } from "@/actions";
import useNotificationStore from "@/store/useNotificationStore";
import useUserStore from "@/store/useUserStore";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import ModalBg from "@/ui/ModalBg";
import clsx from "clsx";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function ChangeInfo({
  setIsEditing,
  isEditing,
}: {
  setIsEditing: (isEditing: boolean) => void;
  isEditing: boolean;
}) {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const setUser = useUserStore((s) => s.setUser);
  const showNotification = useNotificationStore((s) => s.showNotification);

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data: user, error } = await updateUser({ full_name: fullname, username });
    if (error || !user) {
      showNotification("error", error || "Failed to update profile");
      setIsEditing(false);
      return;
    }
    setUser(user);
    showNotification("successful", "Successful to update profile");
    setIsEditing(false);
  };

  return (
    <div
      className={clsx(
        "duration-200 fixed top-[150px] left-1/2 -translate-x-1/2 transition-all ease-in-out z-50 w-[700px]",
        isEditing ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95"
      )}
    >
      <ModalBg className="w-[700px] px-[50px] py-[30px] flex flex-col items-center ">
        <button className="self-end cursor-pointer" onClick={() => setIsEditing(false)}>
          <IoCloseOutline className="text-white w-8 h-8" />
        </button>
        <form onSubmit={handleSave} className="flex flex-col items-center">
          <div className="flex flex-col justify-center gap-8">
            <Input input={fullname} setInput={setFullname} name="full_name" placeholder="Fullname" />
            <Input input={username} setInput={setUsername} name="username" placeholder="Username" />
          </div>
          <Button variant="neon-blue" type="submit" className="mt-12 w-[150px]">
            Save
          </Button>
        </form>
      </ModalBg>
    </div>
  );
}

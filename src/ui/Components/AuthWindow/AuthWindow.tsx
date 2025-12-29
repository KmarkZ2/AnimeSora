"use client";

import { getUserProfile, userLogin, userRegister } from "@/actions";
import useAuthWindowStore from "@/store/useAuthWindowStore";
import useNotificationStore from "@/store/useNotificationStore";
import useUserStore from "@/store/useUserStore";
import { User } from "@/types/types";
import Button from "@/ui/Button";
import ButtonAuth from "@/ui/ButtonAuth";
import Input from "@/ui/Input";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function AuthWindow() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authType = useAuthWindowStore((store) => store.authType);
  const setAuthType = useAuthWindowStore((store) => store.setAuthType);
  const closeWindow = useAuthWindowStore((store) => store.closeWindow);
  const isOpenWindow = useAuthWindowStore((store) => store.isOpenWindow);

  const showNotification = useNotificationStore((store) => store.showNotification);

  const setUser = useUserStore((store) => store.setUser);

  if (!isOpenWindow) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let result;
      setIsLoading(true);

      if (authType === "login") {
        result = await userLogin(password, email);
      } else {
        if (!username) {
          showNotification("error", "Please, write username");
          setIsLoading(false);
          return;
        }
        result = await userRegister(password, email, username);
      }
      if (result.error || !result.data) {
        showNotification("error", result.error || "Something went wrong");
      } else {
        if (authType === "register") {
          showNotification("info", "Confirm your email");
        } else {
          const { data: profile, error } = await getUserProfile();
          if (error) {
            showNotification("error", error || "Something went wrong");
            return;
          }
          setUser({ user: result.data as User, profile: profile });
          showNotification("successful", "Login successful");
        }

        closeWindow();

        setEmail("");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={"fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center"}>
      <div className="flex flex-col items-center justify-center z-60 pt-5 pb-14 px-8 w-[800px] bg-[rgba(18,18,18,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-[10px] backdrop-blur-[20px]">
        <button className="self-end cursor-pointer" onClick={closeWindow}>
          <IoCloseOutline className="text-white w-8 h-8" />
        </button>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center gap-1">
            <ButtonAuth isActive={authType === "login"} onClick={() => setAuthType("login")}>
              Login
            </ButtonAuth>
            <ButtonAuth isActive={authType === "register"} onClick={() => setAuthType("register")}>
              Register
            </ButtonAuth>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-[12px] mt-8">
              {authType === "register" && (
                <Input input={username} setInput={setUsername} placeholder="Username" type="text" />
              )}
              <Input input={email} setInput={setEmail} placeholder="Email" type="email" />
              <Input input={password} setInput={setPassword} placeholder="Passowrd" type="password" />
            </div>
            <Button
              variant="filter"
              isActive={true}
              className="cursor-pointer mt-5 mx-auto"
              type="submit"
              isLoading={isLoading}
              disabled={authType === "login" ? !email || !password : !email || !password || !username}
            >
              {authType === "login" ? "Login" : "Register"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

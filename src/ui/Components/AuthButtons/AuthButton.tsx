"use client";

import useAuthWindowStore from "@/store/useAuthWindowStore";
import Button from "@/ui/Button";

export default function AuthButton() {
  const setIsOpenWindow = useAuthWindowStore((state) => state.setIsOpenWindow);

  const onLogin = () => {
    setIsOpenWindow(true, "login");
  };
  const onRegister = () => {
    setIsOpenWindow(true, "register");
  };

  return (
    <div className="flex w-fit gap-2.5">
      <Button onClick={onLogin} variant="neon-blue">
        <span>Login</span>
      </Button>
      <Button onClick={onRegister} variant="neon-pink">
        <span>Register</span>
      </Button>
    </div>
  );
}

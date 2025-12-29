"use client";

import useNotificationStore from "@/store/useNotificationStore";
import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoInformationCircleOutline } from "react-icons/io5";

export default function Notification() {
  const { closeNotification, message, type, visible } = useNotificationStore();

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (visible) setShouldRender(true);
    const timer = setTimeout(() => {
      if (!visible) setShouldRender(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [visible]);

  const styles = {
    successful: "border-[rgba(255,79,216,0.5)] bg-[rgba(255,79,216,0.1)] text-green-200",
    error: "border-[rgba(0,210,255,0.5)] bg-[rgba(0,210,255,0.1)] text-red-200",
    info: "border-[rgba(255,79,216,0.5)] bg-[rgba(255,79,216,0.1)] text-blue-200",
  };

  const icons = {
    error: <IoCloseCircleOutline className="w-6 h-6 text-red-200" />,
    successful: <IoCheckmarkCircleOutline className="w-6 h-6 text-green-200" />,
    info: <IoInformationCircleOutline className="w-6 h-6 text-yellow-200" />,
  };

  return (
    <div
      onClick={closeNotification}
      className={`fixed left-1/2 -translate-x-1/2 z-[100] duration-500 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[rgba(18,18,18,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] backdrop-blur-[20px] select-none cursor-pointer transition-all ease-in-out
        ${visible ? "top-8 opacity-100 translate-y-0" : "-top-20 opacity-0 -translate-y-10 "}
        ${styles[type]}`}
    >
      {shouldRender && (
        <>
          {icons[type]}
          <span className="font-medium text-sm md:text-base">{message}</span>
        </>
      )}
    </div>
  );
}

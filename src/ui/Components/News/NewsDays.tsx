"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

const DaysMap = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function NewsDays({ activeDay }: { activeDay: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = (day: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("day", day);
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2.5 text-[1rem] text-[rgba(255,255,255,0.7)] tracking-[2%] font-normal">
      {DaysMap.map((el) => (
        <button
          key={el}
          type="button"
          onClick={() => handleSubmit(el)}
          className={clsx(
            "flex items-center justify-center duration-200 cursor-pointer px-2 py-0.5 ",
            activeDay === el ? "text-[#00D2FF]" : "text-white",
          )}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

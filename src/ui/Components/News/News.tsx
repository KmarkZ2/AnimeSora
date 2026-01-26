import ModalBg from "@/ui/ModalBg";
import NewsDays from "./NewsDays";
import Line from "@/ui/Line";
import { Suspense } from "react";
import AnimeNewsLoader from "./AnimeNewsLoader";
import SliderNewsSkeleton from "./SliderNewsSkeleton";

const DaysMap = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function NewsBlock({ day }: { day?: string }) {
  const currentDay = day || getCurrentDay();
  return (
    <ModalBg className="px-5 py-[50px] flex justify-center gap-8 min-w-[1320px] flex-col">
      <NewsDays activeDay={currentDay} />
      <Line type="horizontal" />
      <Suspense key={day} fallback={<SliderNewsSkeleton />}>
        <AnimeNewsLoader day={currentDay} />
      </Suspense>
    </ModalBg>
  );
}

function getCurrentDay(): string {
  const numberDay = new Date().getDay();
  const correctNumberDay = numberDay === 0 ? 6 : numberDay - 1;
  return DaysMap[correctNumberDay];
}

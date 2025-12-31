import { Anime } from "@/types/types";
import Image from "next/image";
import ModalBg from "../ModalBg";

export default function AnimeCard(anime: Anime) {
  return (
    <div className="w-60 h-96 p-2">
      <div className="flex flex-col items-center gap-2 w-full h-full border-none overflow-hidden p-0">
        <div className="relative flex-1 w-full rounded-[10px] overflow-hidden">
          <Image src={anime.image} alt={anime.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 240px" />
          <ModalBg className="absolute top-[5px] left-[5px] py-1 px-2.5 flex items-center justify-center max-w-fit z-10">
            <span className="font-bold text-[14px] text-center text-[rgba(255,255,255,0.7)]">4.5</span>
          </ModalBg>
        </div>
        <div className="shrink-0 w-full px-1 pb-1">
          <h1 className="line-clamp-2 font-bold text-[1rem] text-center text-white">{anime.title}</h1>
          <span className="line-clamp-2 font-medium text-[14px] text-center text-[rgba(255,255,255,0.3)] block mt-1">
            {anime.genres.map((el) => el.name).join(" | ")}
          </span>
        </div>
      </div>
    </div>
  );
}

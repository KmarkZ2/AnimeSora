import { Anime } from "@/app/types/types";
import Image from "next/image";

export default function AnimeCard(anime: Anime) {
  return (
    <div className="relative w-[286px] h-[344px] border-[#121212] border-[7px] rounded-[10px] gap-[10px] overflow-hidden">
      <Image
        src={anime.image}
        alt={"Image"}
        fill
        sizes="286px"
        className={`object-cover rounded-[10px]`}
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.98)_65%)] rounded-[7px]"></div>
      <div className="flex flex-col gap-[10px] pl-[10px] pr-[10px] pb-[10px] font-bold text-[1rem] text-[#E0E0E0] absolute bottom-0 left-0 right-0">
        <p
          className="font-[Poppins] text-center overflow-hidden 
           text-ellipsis 
           [display:-webkit-box] 
           [-webkit-line-clamp:2] 
           [-webkit-box-orient:vertical]"
        >
          {anime.title}
        </p>
        <p
          className="font-[NotoSansJP] text-center overflow-hidden 
           text-ellipsis 
           [display:-webkit-box] 
           [-webkit-line-clamp:2] 
           [-webkit-box-orient:vertical]"
        >
          {anime.titleJp}
        </p>
      </div>
    </div>
  );
}

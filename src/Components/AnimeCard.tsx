import { Anime } from "@/app/types/types";
import Image from "next/image";

export default function AnimeCard(anime: Anime) {
  return (
    <div className="relative md:w-[286px] w-[143px] md:h-[344px] h-[172px] border-[#121212] md:border-[7px] border-[3px] rounded-[10px] md:gap-[10px] gap-[5px] overflow-hidden">
      <Image
        src={anime.image}
        alt={"Image"}
        fill
        sizes="md:286px 143"
        className={`object-cover rounded-[10px]`}
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.98)_65%)] rounded-[7px]"></div>
      <div className="flex flex-col md:gap-[10px] gap-[5px] md:pl-[10px] pl-[5px] md:pr-[10px] pr-[5px] md:pb-[10px] pb-[5px] font-bold md:text-[1rem] text-[0.5rem] text-[#E0E0E0] absolute bottom-0 left-0 right-0">
        <p
          className="font-[Poppins] text-center overflow-hidden 
           text-ellipsis 
           [display:-webkit-box] 
           [-webkit-line-clamp:1] 
           [-webkit-box-orient:vertical]"
        >
          {anime.title}
        </p>
        <p
          className="font-[NotoSansJP] text-center overflow-hidden 
           text-ellipsis 
           [display:-webkit-box] 
           [-webkit-line-clamp:1] 
           [-webkit-box-orient:vertical]"
        >
          {anime.titleJp}
        </p>
      </div>
    </div>
  );
}

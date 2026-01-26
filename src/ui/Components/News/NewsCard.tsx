import { Anime } from "@/types/types";
import ModalBg from "@/ui/ModalBg";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ anime }: { anime: Anime }) {
  return (
    <div className="relative rounded-2xl h-[300px] w-[240px] overflow-hidden">
      <Link href={`/animes/${anime.id}`}>
        <Image src={anime.image} alt="" sizes="240px" fill className="object-fill" />
        <div className="absolute w-full h-full bg-linear-to-b from-transparent to-[rgba(0,0,0,0.95)] z-10"></div>
        <ModalBg className="absolute top-[5px] left-[10px] py-1 px-2.5 flex items-center justify-center max-w-fit z-20">
          <span className="font-medium tracking-wider text-[12px] text-center text-white text-shadow-[0_0_10px_rgba(255,255,255,1)]">
            {anime.score || 0}
          </span>
        </ModalBg>
        <div className="absolute flex flex-col justify-center gap-1.5 bottom-8 right-0 left-0 px-8 z-20">
          <h1 className="text-white text-[1rem] font-semibold text-center line-clamp-2">{anime.title}</h1>
          <span className="text-[rgba(255,255,255,0.6)] text-[12px] font-semibold text-center line-clamp-2">
            {anime.genres.map((el) => el.name).join(" | ")}
          </span>
        </div>
      </Link>
    </div>
  );
}

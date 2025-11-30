import { Anime } from "@/types/types";
import Button from "@/ui/Button";
import Link from "next/link";
import AnimeCard from "../AnimeCard";
import { useState } from "react";

type AnimeListProps = {
  animes: {
    animelist: Anime[];
    pagination: { last_visible_page: number; current_page: number; items: { per_page: number } };
  };
};

export default function AnimeList({ animes }: AnimeListProps) {
  const [anime, setAnime] = useState<Anime[]>();

  return (
    <div className="md:mt-[50px] mt-[25px]">
      <div className="flex flex-col md:gap-[20px] gap-[10px] justify-center">
        <div className="flex flex-row flex-wrap justify-center md:gap-[50px] gap-[25px]">
          {animes.animelist.map((anime) => {
            return (
              <Link href={`./animes/${anime.title}`}>
                <AnimeCard {...anime} />
              </Link>
            );
          })}
        </div>
        <Button bgColor="#790069" onClick={} text="See more" className="px-10 py-[15px] font-normal" />
      </div>
    </div>
  );
}

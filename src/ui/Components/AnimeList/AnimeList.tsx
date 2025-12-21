"use client";

import { useState } from "react";
import { Anime, AnimeListStructure, ApiResponse } from "@/types/types";

import Link from "next/link";
import Button from "@/ui/Button";
import AnimeCard from "../AnimeCard";

type AnimeListProps = {
  initialAnimes: AnimeListStructure;
  loadMore: (page: number) => Promise<ApiResponse<AnimeListStructure>>;
};

export default function AnimeList({ initialAnimes, loadMore }: AnimeListProps) {
  const [animes, setAnimes] = useState<Anime[]>([...initialAnimes.animelist]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    initialAnimes.pagination.current_page !== initialAnimes.pagination.last_visible_page
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoadMoreHandler = async () => {
    setIsLoading(true);
    const nextPage = page + 1;

    try {
      const { data, error } = await loadMore(nextPage);
      if (!data || error) return <div>Error load</div>;
      setAnimes((prev) => [...prev, ...data.animelist]);
      setPage(nextPage);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="md:mt-[50px] mt-[25px]">
      <div className="flex flex-col md:gap-[20px] gap-[10px] justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center md:gap-[50px] gap-[25px]">
          {animes.map((anime) => {
            return (
              <Link href={`./animes/${anime.id}`} key={anime.id}>
                <AnimeCard {...anime} />
              </Link>
            );
          })}
        </div>
        {hasNextPage && (
          <Button onClick={onLoadMoreHandler} isLoading={isLoading} variant="neon-pink">
            <span>{!isLoading ? "Load more" : "Loading..."}</span>
          </Button>
        )}
      </div>
    </div>
  );
}

import { Suspense } from "react";
import { getGenresAnime } from "@/service/apiAnimeFetch";
import { Genre, GenreState } from "../../types/types";
import SearchComponent from "@/ui/Components/Search/SearchComponent";
import AnimeLoader from "@/ui/Components/AnimeList/AnimeLoader";
import AnimeListSkeleton from "@/ui/AnimeListSkeleton";
import Image from "next/image";

export type SearchParameters = {
  genres: Genre[];
  searchInput: string;
};

type GenresProps = {
  searchParams: Promise<{
    genre?: string[] | string;
    query?: string;
  }>;
};

export default async function Genres({ searchParams }: GenresProps) {
  const { genre, query } = await searchParams;
  const { data: genres } = await getGenresAnime();

  const safeGenreList: Genre[] = genres || [];
  let selectedGenres: string[] = [];
  if (Array.isArray(genre)) selectedGenres = genre;
  else if (typeof genre === "string") selectedGenres = [genre];

  const genresUIList: GenreState[] = safeGenreList.map((el) => ({
    genre: el,
    isActive: selectedGenres.includes(el.name),
  }));

  const searchParameter: SearchParameters = {
    searchInput: query || "",
    genres: genresUIList.filter((el) => el.isActive).map((el) => el.genre) || [],
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative">
        <SearchComponent genres={genresUIList} />
      </div>
      <Suspense fallback={<AnimeListSkeleton />}>
        <AnimeLoader searchParams={searchParameter} />
      </Suspense>
    </div>
  );
}

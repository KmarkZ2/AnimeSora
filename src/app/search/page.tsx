import { Suspense } from "react";
import { getGenresAnime } from "@/service/apiAnimeFetch";
import { Genre, GenreState } from "../../types/types";
import SearchComponent from "@/ui/Components/Search/SearchComponent";
import AnimeLoader from "@/ui/Components/AnimeList/AnimeLoader";

export type SearchParameters = {
  genres: Genre[];
  searchInput: string;
};

type GenresProps = {
  searchParams: Promise<{
    genre?: string[] | string;
    title?: string;
  }>;
};

export default async function Genres({ searchParams }: GenresProps) {
  const { genre, title } = await searchParams;
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
    searchInput: title || "",
    genres: genresUIList.filter((el) => el.isActive).map((el) => el.genre) || [],
  };

  return (
    <div className="md:p-[50px] p-[5px] pt-[10px] flex flex-col items-center">
      <SearchComponent genres={genresUIList} />
      <Suspense>
        <AnimeLoader searchParams={searchParameter} />
      </Suspense>
    </div>
  );
}

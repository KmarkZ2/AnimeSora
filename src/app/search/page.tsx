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
  searchParams: {
    genre: string[];
    title: string;
  };
};

export default async function Genres({ searchParams }: GenresProps) {
  const { genre, title } = await searchParams;
  const genres = await getGenresAnime();

  const genresList: GenreState[] = genre
    ? genres.map((g) => {
        return genre.includes(g.name) ? { genre: g, isActive: true } : { genre: g, isActive: false };
      })
    : genres.map((el) => ({ genre: el, isActive: false }));

  const searchParameter: SearchParameters = {
    searchInput: title || "",
    genres: genre ? genres.filter((g) => genre.includes(g.name)) : [],
  };

  console.log(searchParameter.genres);

  return (
    <div className="md:p-[50px] p-[5px] pt-[10px] flex flex-col items-center">
      <SearchComponent genres={genresList} />
      <Suspense>
        <AnimeLoader searchParams={searchParameter} />
      </Suspense>
    </div>
  );
}

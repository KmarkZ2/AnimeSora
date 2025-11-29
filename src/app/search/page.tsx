import { getGenresAnime } from "@/service/apiAnimeFetch";
import { Genre, GenreState } from "../../types/types";
import ListFilter from "@/ui/Components/List/Filter";
import Recomendations from "@/ui/Components/List/Recomendations";
import SearchComponent from "@/ui/Components/Search/SearchComponent";
import { Suspense } from "react";

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
    searchInput: "",
    genres: [],
  };

  return (
    <div className="md:p-[50px] p-[5px] pt-[10px] flex flex-col items-center">
      <SearchComponent genres={genresList} />
      <Suspense fallback>{/* <AnimeLoader /> */}</Suspense>
      {/* <div className="md:mt-[50px] mt-[25px]">
        {searchParameter.genres.length < 1 &&
        searchParameter.searchInput === "" ? (
          <Recomendations />
        ) : (
          <ListFilter
            key={JSON.stringify(searchParameter)}
            filters={searchParameter}
          />
        )}
      </div> */}
    </div>
  );
}

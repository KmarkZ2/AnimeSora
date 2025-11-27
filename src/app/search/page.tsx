import { getGenresAnime } from "@/service/apiAnimeFetch";
import { Genre } from "../../types/types";
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

  const searchParameter: SearchParameters = {
    searchInput: title || "",
    genres: genres.filter((g) => genre.includes(g.name)),
  };

  return (
    <div className="md:p-[50px] p-[5px] pt-[10px] flex flex-col items-center">
      <SearchComponent genres={[]} />
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

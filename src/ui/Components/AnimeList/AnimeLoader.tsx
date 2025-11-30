import { SearchParameters } from "@/app/search/page";
import { getAnimeByFilter } from "@/service/apiAnimeFetch";
import AnimeList from "./AnimeList";
import Recomendations from "../List/Recomendations";

type AnimeLoaderProps = {
  searchParams: SearchParameters;
};

export default async function AnimeLoader({ searchParams }: AnimeLoaderProps) {
  const animes = await getAnimeByFilter(searchParams.genres, searchParams.searchInput);

  if (typeof animes === "string" || animes.animelist.length < 1) {
    return <Recomendations />;
  }

  return <AnimeList animes={animes} />;
}

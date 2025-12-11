import { SearchParameters } from "@/app/search/page";
import { getAnimeByFilter, getAnimeTop } from "@/service/apiAnimeFetch";
import AnimeList from "./AnimeList";

type AnimeLoaderProps = {
  searchParams: SearchParameters;
};

export default async function AnimeLoader({ searchParams }: AnimeLoaderProps) {
  const listKey = JSON.stringify(searchParams);

  async function loadMoreAnime(page: number) {
    "use server";
    return await getAnimeByFilter(
      searchParams.genres,
      searchParams.searchInput,
      page
    );
  }
  async function LoadMoreRecomendations(page: number) {
    "use server";
    return await getAnimeTop(page);
  }

  if (searchParams.genres.length < 1 && searchParams.searchInput === "") {
    const { data: recomendations, error } = await getAnimeTop(1);
    if (!recomendations || error) {
      return <div>Error load</div>;
    }
    return (
      <AnimeList
        initialAnimes={recomendations}
        loadMore={LoadMoreRecomendations}
        key={listKey}
      />
    );
  }

  const { data: initialAnimes, error } = await getAnimeByFilter(
    searchParams.genres,
    searchParams.searchInput
  );
  if (!initialAnimes || error) {
    return <div>Error load</div>;
  } else if (initialAnimes.animelist.length < 1) {
    return <div>Nothing found</div>;
  }
  return (
    <AnimeList
      initialAnimes={initialAnimes}
      loadMore={loadMoreAnime}
      key={listKey}
    />
  );
}

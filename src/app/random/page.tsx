import { getAnimePlayers, getAnimeRandom } from "../../service/apiAnimeFetch";
import AnimePageComponent from "@/ui/Components/AnimePageComponent";

export const dynamic = "force-dynamic";

export default async function Random() {
  const { data: anime, error } = await getAnimeRandom();

  if (error || !anime) return <div>Error to load data</div>;

  const { data: players, error: players_error } = await getAnimePlayers(anime.id);

  return <AnimePageComponent anime={anime} players={players?.players || []} />;
}

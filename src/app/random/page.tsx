import { getAnimeRandom } from "../../service/apiAnimeFetch";
import AnimePageComponent from "@/ui/Components/AnimePageComponent";

export const dynamic = "force-dynamic";

export default async function Random() {
  const { data: anime, error } = await getAnimeRandom();

  if (error || !anime) return <div>Error to load data</div>;

  return (
    <div>
      <AnimePageComponent anime={anime}></AnimePageComponent>
    </div>
  );
}

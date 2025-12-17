import AnimePage from "@/app/animes/[id]/page";
import { getAnimeRandom } from "../../service/apiAnimeFetch";
import "@/app/animes/[id]/page";

export default async function Random() {
  const { data: anime, error } = await getAnimeRandom();

  if (error || !anime) return <div>Error to load data</div>;

  return (
    <div>
      <AnimePage params={{ id: anime.id.toString() }}></AnimePage>
    </div>
  );
}

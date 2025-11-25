import AnimePage from "@/app/animes/[id]/page";
import { getAnimeRandom } from "../../service/apiAnimeFetch";
import "@/app/animes/[id]/page";

export default async function Random() {
  const anime = await getAnimeRandom();

  return (
    <div>
      <AnimePage params={{ id: anime.id.toString() }}></AnimePage>
    </div>
  );
}

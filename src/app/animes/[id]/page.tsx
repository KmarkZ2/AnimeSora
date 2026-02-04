import AnimePageComponent from "@/ui/Components/AnimePageComponent";
import { getAnimeById, getAnimePlayers } from "../../../service/apiAnimeFetch";
export const revalidate = 86400;

type AnimePageParams = {
  params: Promise<{ id: string }>;
};

export default async function AnimePage({ params }: AnimePageParams) {
  const { id } = await params;
  const { data: anime, error } = await getAnimeById(parseInt(id));
  if (error || !anime) return <div>Error to load data</div>;

  return <AnimePageComponent anime={anime} />;
}

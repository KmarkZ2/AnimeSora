import { getAnimeShudles } from "@/service/apiAnimeFetch";
import Slider from "@/ui/Slider";

export default async function AnimeNewsLoader({ day }: { day: string }) {
  const { data: animeList, error } = await getAnimeShudles(day);

  if (error || !animeList) return <div className="text-2xl white text-center">News not found</div>;

  return <Slider animeList={animeList} />;
}

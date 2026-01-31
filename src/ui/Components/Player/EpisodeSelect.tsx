"use client";

import usePlayerStore from "@/store/usePlayerStore";
import { Episode } from "@/types/types";
import Button from "@/ui/Button";

export default function EpisodeSelect({ episodes }: { episodes: Episode[] }) {
  const { setEpisode, episode } = usePlayerStore();

  const onSetEpisode = (episodeNumber: string) => {
    const episode = episodes.filter((el) => el.number === episodeNumber)[0] || "";
    setEpisode(episode);
  };

  return (
    <div className="flex items-center gap-5">
      {episodes.map((el) => (
        <Button key={el.number} variant="filter" isActive={episode?.number === el.number} onClick={() => onSetEpisode(el.number)}>
          {el.number}
        </Button>
      ))}
    </div>
  );
}

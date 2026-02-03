"use client";

import usePlayerStore from "@/store/usePlayerStore";
import { Episode } from "@/types/types";
import Button from "@/ui/Button";
import Select from "@/ui/Select/Select";

export default function EpisodeSelect({ episodes }: { episodes: Episode[] }) {
  const { setEpisode, episode } = usePlayerStore();

  const onSetEpisode = (episodeNumber: string) => {
    const episode = episodes.filter((el) => el.number === episodeNumber)[0] || "";
    setEpisode(episode);
  };

  return <Select active={episode?.number ?? ""} items={episodes.map((el) => el.number)} onSelect={onSetEpisode} text="Серия" />;
}

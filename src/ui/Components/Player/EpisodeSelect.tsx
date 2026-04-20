"use client";

import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlayerStore from "@/store/usePlayerStore";
import { Episode } from "@/types/types";

export default function EpisodeSelect({ episodes }: { episodes: Episode[] }) {
  const { setEpisode, episode } = usePlayerStore();

  const onSetEpisode = (episodeNumber: string) => {
    const episode = episodes.filter((el) => el.number === episodeNumber)[0] || "";
    setEpisode(episode);
  };

  return (
    <Field>
      <Select defaultValue="banana">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent position={"popper"}>
          <SelectGroup>
            {episodes.map((el) => (
              <SelectItem value={el.number} onClick={() => onSetEpisode(el.number)}>
                {el.number}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}

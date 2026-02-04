"use client";

import { Player, YummiAnimeEpisodeResponse } from "@/types/types";
import DubbingSelect from "./DubbingSelect";
import EpisodeSelect from "./EpisodeSelect";
import PlayerSelect from "./PlayerSelect";
import usePlayerStore from "@/store/usePlayerStore";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useState } from "react";
import { fetcher, getYummiAnimeId, setEpisode, YummiApi } from "@/service/apiAnimeFetch";

export default function WindowPlayer({ animeId }: { animeId: number }) {
  const usePlayer = usePlayerStore((player) => player);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data: yummi_anime_id, error: id_error } = await getYummiAnimeId(animeId);
        if (id_error || !yummi_anime_id) return { data: null, error: id_error };

        const { data, error } = await fetcher<YummiAnimeEpisodeResponse>(`anime/${yummi_anime_id}/videos`, YummiApi);
        if (error || !data?.response) return { data: null, error: error };

        const AnimePlayers = setEpisode(data.response, yummi_anime_id);
        setPlayers(AnimePlayers.players);
      } catch (err) {}
    };
    fetchPlayers();
    if (players && players.length > 0) {
      usePlayer.setPlayer(players[0]);
      usePlayer.setDubbing(players[0].dubbing[0]);
      usePlayer.setEpisode(players[0].dubbing[0].episodes[0]);
    }
  }, [animeId, players]);

  if (!players) return <h1 className="text-2xl text-white font-bold text-center">Error to load episodes</h1>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-5">
          <PlayerSelect players={players} />
          <DubbingSelect dubbings={usePlayer.player?.dubbing ?? []} />
        </div>
        <EpisodeSelect episodes={usePlayer.dubbing?.episodes ?? []} />
      </div>
      {usePlayer.episode?.iframe_url && <VideoPlayer url={usePlayer.episode?.iframe_url} />}
    </div>
  );
}

"use client";

import { AnimePlayers, Player } from "@/types/types";
import DubbingSelect from "./DubbingSelect";
import EpisodeSelect from "./EpisodeSelect";
import PlayerSelect from "./PlayerSelect";
import usePlayerStore from "@/store/usePlayerStore";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useState } from "react";
import { SoraResponse } from "@/app/api/types";

export default function WindowPlayer({ anime_id }: { anime_id: number }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const { player, dubbing, episode, initPlayer } = usePlayerStore();

  useEffect(() => {
    const fetchAndInit = async () => {
      if (!anime_id) return;

      try {
        const res = await fetch(`/api/anime/players?anime_id=${anime_id}`, { method: "GET" });
        if (!res.ok) return;
        const body = (await res.json()) as SoraResponse<AnimePlayers>;

        if (body.ok && body.data) {
          setPlayers(body.data.players);
          initPlayer(body.data.players[0]);
        }
      } catch (error) {
        console.error("Помилка завантаження плеєрів:", error);
      }
    };

    fetchAndInit();
  }, [anime_id, initPlayer]);

  if (!players) return <h1 className="text-2xl text-white font-bold text-center">Error to load episodes</h1>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <PlayerSelect players={players} />
        <DubbingSelect dubbings={player?.dubbing ?? []} />
        <EpisodeSelect episodes={dubbing?.episodes ?? []} />
      </div>
      {episode?.iframe_url && <VideoPlayer url={episode?.iframe_url} />}
    </div>
  );
}

"use client";

import { Player } from "@/types/types";
import DubbingSelect from "./DubbingSelect";
import EpisodeSelect from "./EpisodeSelect";
import PlayerSelect from "./PlayerSelect";
import usePlayerStore from "@/store/usePlayerStore";
import VideoPlayer from "./VideoPlayer";
import { useEffect } from "react";

export default function WindowPlayer({ players }: { players: Player[] | null }) {
  const usePlayer = usePlayerStore((player) => player);

  useEffect(() => {
    if (!players || players.length === 0) return;

    usePlayer.setPlayer(players[0]);
    usePlayer.setDubbing(players[0].dubbing[0]);
    usePlayer.setEpisode(players[0].dubbing[0].episodes[0]);
  }, [players]);

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

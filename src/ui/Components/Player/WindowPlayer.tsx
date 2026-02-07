"use client";

import DubbingSelect from "./DubbingSelect";
import EpisodeSelect from "./EpisodeSelect";
import PlayerSelect from "./PlayerSelect";
import usePlayerStore from "@/store/usePlayerStore";
import VideoPlayer from "./VideoPlayer";
import { useEffect } from "react";
import { useAnimePlayers } from "@/hooks/useAnimePlayers";

export default function WindowPlayer({ anime_id }: { anime_id: number }) {
  const { players, isLoading, error } = useAnimePlayers(anime_id);
  const { player, dubbing, episode, initPlayer } = usePlayerStore();

  useEffect(() => {
    if (players.length > 0) {
      initPlayer(players[0]);
    }
  }, [players]);

  if (isLoading) return <div className="text-white">Loading players...</div>;
  if (error || !players.length) return <div className="text-red-500">Players not found</div>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <PlayerSelect players={players} />
        <DubbingSelect dubbings={player?.dubbing ?? []} />
        <EpisodeSelect episodes={dubbing?.episodes ?? []} />
      </div>
      {episode?.iframe_url && <VideoPlayer url={episode.iframe_url} />}
    </div>
  );
}

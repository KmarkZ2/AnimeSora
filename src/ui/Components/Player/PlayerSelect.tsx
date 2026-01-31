"use client";

import usePlayerStore from "@/store/usePlayerStore";
import { Player } from "@/types/types";
import Select from "@/ui/Select/Select";

export default function PlayerSelect({ players }: { players: Player[] }) {
  const { setPlayer, player } = usePlayerStore();

  const onSetPlayer = (playerId: string) => {
    const player = players.filter((el) => el.name === playerId)[0] || null;
    setPlayer(player);
  };

  return <Select active={player?.name || ""} items={players.map((el) => el.name)} onSelect={onSetPlayer} text="Плеер" />;
}

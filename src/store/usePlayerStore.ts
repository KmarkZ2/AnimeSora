import { Dubbing, Episode, Player } from "@/types/types";
import { create } from "zustand";

interface IPlayer {
    player: Player | null,
    dubbing: Dubbing | null,
    episode: Episode | null,

    setPlayer: (playerId: Player) => void,
    setDubbing: (dubbing: Dubbing) => void,
    setEpisode: (episode: Episode) => void,
    initPlayer: (player: Player) => void,
    clearPlayer: () => void
}

const usePlayerStore = create<IPlayer>((set) => ({
    player: null,
    dubbing: null,
    episode: null,
    setPlayer: (player: Player) => {
        set({ player: player, dubbing: player.dubbing[0], episode: player.dubbing[0].episodes[0] })
    },
    setDubbing: (dubbing: Dubbing) => {
        set({ dubbing, episode: dubbing.episodes[0] })
    },
    setEpisode: (episode: Episode) => {
        set({ episode })
    },
    initPlayer: (player: Player) => {
        set({ player: player, dubbing: player.dubbing[0], episode: player.dubbing[0].episodes[0] })
    },
    clearPlayer: () => {
        set({ player: null, dubbing: null, episode: null })
    }
}))

export default usePlayerStore; 
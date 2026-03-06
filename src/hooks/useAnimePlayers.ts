import { useState, useEffect } from "react";
import { AnimePlayers, Player } from "@/types/types";
import { SoraResponse } from "@/app/api/types";

export function useAnimePlayers(anime_id: number) {
    const [players, setPlayers] = useState<Player[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        setIsLoading(true);
        setPlayers([]);

        const fetchPlayers = async () => {
            try {
                const res = await fetch(`/api/anime/players?anime_id=${anime_id}`);
                if (!res.ok) throw new Error("Failed to fetch");

                const body = (await res.json()) as SoraResponse<AnimePlayers>;

                if (isMounted && body.ok && body.data) {
                    setPlayers(body.data.players);
                }
            } catch (err) {
                if (isMounted) setError("Error loading players");
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        if (anime_id) fetchPlayers();

        return () => { isMounted = false; }
    }, [anime_id]);

    return { players, isLoading, error };
}
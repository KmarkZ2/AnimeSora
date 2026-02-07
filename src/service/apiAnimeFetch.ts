import axios, { AxiosInstance, AxiosStatic } from "axios";
import axiosRetry from "axios-retry";
import { Anime, AnimeListStructure, AnimePlayers, ApiResponse, CorrectPlayers, Genre, JikanAnime, JikanAnimeResponse, JikanGenreResponse, Player, SingleJikanAnimeResponse, YummiAnimeEpisode, YummiAnimeEpisodeResponse, YummiAnimeResponse } from "../types/types";
import { uniqueByValue } from "@/lib/functionHelper";

const JikanApi = axios.create({
    baseURL: 'https://api.jikan.moe/v4',
    timeout: 5000,
})
export const YummiApi = axios.create({
    baseURL: 'https://api.yani.tv/',
    timeout: 5000,
    headers: {
        "X-Application": "qojyc15q1meuuqt6",
        Lang: "uk",
        accept: 'application/json'
    }
})

axiosRetry(JikanApi, {
    retries: 3,
    retryDelay: (retryCount) => retryCount * 1000,
    retryCondition: (error) => {
        return (
            error.code === "ECONNABORTED" || // таймаут
            !error.response ||               // немає відповіді
            error.response.status >= 500 ||    // 5xx помилки
            error.response.status === 429     // 5xx помилки
        );
    },
});
axiosRetry(YummiApi, {
    retries: 3,
    retryDelay: (retryCount) => retryCount * 1000,
    retryCondition: (error) => {
        return (
            error.code === "ECONNABORTED" || // таймаут
            !error.response ||               // немає відповіді
            error.response.status >= 500 ||    // 5xx помилки
            error.response.status === 429     // 5xx помилки
        );
    },
})

export async function fetcher<T>(url: string, api: AxiosInstance): Promise<ApiResponse<T>> {
    try {
        const res = await api.get(url);
        return { data: res.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error('Помилка від сервера', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('Немає відповіді від сервера', error.request);
            } else {
                console.error("Проблема в axios", error.message);
            }
        } else {
            console.error("Невідома помилка:", error);
        }

        return { data: null, error: "Failed to get data" };
    }
}

export async function getAnimeRandom(): Promise<ApiResponse<Anime>> {
    const { data: rawData, error } = await fetcher<SingleJikanAnimeResponse>('/random/anime', JikanApi);
    if (error || !rawData || !rawData.data) return { data: null, error: "Error to get anime data" }
    return { data: setAnime(rawData.data) }
}

export async function getAnimeById(anime_id: number): Promise<ApiResponse<Anime>> {
    const { data: rawData, error } = await fetcher<SingleJikanAnimeResponse>(`/anime/${anime_id}`, JikanApi);
    if (error || !rawData || !rawData.data) return { data: null, error: "Error to get anime data" }
    return { data: setAnime(rawData.data) }
}

export async function getAnimeTop(page: number = 1): Promise<ApiResponse<AnimeListStructure>> {
    try {
        const { data: rawData, error } = await fetcher<JikanAnimeResponse>(`/top/anime?page=${page}`, JikanApi);
        if (error || !rawData) return { data: null, error: "Error to get anime data" }
        const animes: Anime[] = rawData.data.map((el) => setAnime(el));
        return {
            data: {
                animelist: animes,
                pagination: {
                    last_visible_page: rawData.pagination.last_visible_page,
                    current_page: rawData.pagination.current_page,
                    items: {
                        per_page: rawData.pagination.items.per_page
                    }
                }
            }
        }
    } catch (er) {
        console.log(er)
        return { data: null, error: "Error to get anime data" }
    }
}

export async function getGenresAnime(): Promise<ApiResponse<Genre[]>> {
    try {
        const { data: rawData, error } = await fetcher<JikanGenreResponse>('/genres/anime', JikanApi);
        if (error || !rawData) return { data: null, error: "Error to get anime data" }
        const genres: Genre[] = rawData.data.map((el: { mal_id: number, name: string }) => ({ id: el.mal_id, name: el.name }));
        return { data: genres };
    }
    catch (er) {
        console.log(er)
        return { data: null, error: "Error to get anime genres" };
    }
}

export async function getAnimeByFilter(genres: Genre[] = [], q: string = '', page: number = 1, limit: number = 25): Promise<ApiResponse<AnimeListStructure>> {
    try {
        const { data: rawData, error } = await fetcher<JikanAnimeResponse>(`/anime?q=${q}&genres=${genres.map(el => el.id)}&page=${page}&limit=${limit}`, JikanApi);
        if (error || !rawData) return { data: null, error: "Error to get anime data" }
        const animes = rawData.data.map((el) => setAnime(el))
        return {
            data: {
                animelist: animes,
                pagination: {
                    last_visible_page: rawData.pagination.last_visible_page,
                    current_page: rawData.pagination.current_page,
                    items: {
                        per_page: rawData.pagination.items.per_page
                    }
                }
            }
        };
    } catch (error) {
        console.log(error, 'getAnimeByFilter ERROR')
        return { data: null, error: "Error to get anime data" };
    }

}

export async function getAnimeShudles(day: string): Promise<ApiResponse<Anime[]>> {
    try {
        const { data, error } = await fetcher<JikanAnimeResponse>(`/schedules?filter=${day}`, JikanApi);
        if (error || !data) return { data: null, error: error }
        const animes = data.data.map(el => setAnime(el));
        return { data: animes };
    } catch (err) {
        return { data: null, error: "Error to get anime schedules" }
    }
}

export async function getYummiAnimeId(mal_ids: number): Promise<ApiResponse<number>> {
    try {
        const { data, error } = await fetcher<YummiAnimeResponse>(`anime?mal_ids=${mal_ids}`, YummiApi)
        if (error || !data?.response) return { data: null, error }
        return { data: data.response[0].anime_id }
    } catch (error) {
        console.error("Error to get yummiId", error)
        return { data: null, error: "Error to get yummiId" }
    }

}

export async function getAnimePlayers(mal_ids: number): Promise<ApiResponse<AnimePlayers>> {
    try {
        const { data: yummi_anime_id, error: id_error } = await getYummiAnimeId(mal_ids);
        if (id_error || !yummi_anime_id) return { data: null, error: id_error }

        const { data, error } = await fetcher<YummiAnimeEpisodeResponse>(`anime/${yummi_anime_id}/videos`, YummiApi);
        if (error || !data?.response) return { data: null, error: error }

        const AnimePlayers = setEpisode(data.response, yummi_anime_id)
        return { data: AnimePlayers };
    } catch (err) {
        return { data: null, error: "Error to get anime players" }
    }

}

function setAnime(data: JikanAnime): Anime {
    const anime: Anime = {
        id: data.mal_id,
        title: data.title_english ?? data.title ?? "Unknown Title",
        titleJp: data.title_japanese || "",
        genres: data.genres ? data.genres.map((el) => ({ id: el.mal_id, name: el.name })) : [],
        image: data.images?.webp?.large_image_url || data.images?.jpg?.large_image_url || "",
        type: data.type || "TV",
        episodes: data.episodes || 0,
        duration: data.duration || "Unknown",
        theme: data.themes ? data.themes.map((el) => el.name) : [],
        rating: data.rating || "N/A",
        source: data.source || "Original",
        synopsis: data.synopsis || "No description available.",
        score: data.score || 0,
    }
    return anime;
}

export function setEpisode(data: YummiAnimeEpisode[], anime_id: number): AnimePlayers {
    const animePlayers: AnimePlayers = {
        anime_id: anime_id,
        players: []
    };
    let Players: Player[] = data.map(el => ({ name: el.data.player, dubbing: [] })).filter(el => CorrectPlayers.includes(el.name));
    Players = uniqueByValue(Players);
    Players.forEach((player) => {
        data.forEach(el => el.data.player === player.name && player.dubbing.push({ name: el.data.dubbing, episodes: [] }))
        player.dubbing = uniqueByValue(player.dubbing);
    })
    Players.forEach((player) => {
        player.dubbing.forEach(dub => {
            data.forEach(el => {
                if (el.data.player === player.name && el.data.dubbing === dub.name) {
                    dub.episodes.push({ iframe_url: el.iframe_url, number: el.number, video_id: el.video_id })
                }
            })
            dub.episodes = uniqueByValue(dub.episodes);
        })
    })
    animePlayers.players = Players;
    return animePlayers;
}
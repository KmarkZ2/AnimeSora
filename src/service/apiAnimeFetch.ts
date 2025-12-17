import axios from "axios";
import axiosRetry from "axios-retry";
import { Anime, AnimeListStructure, ApiResponse, Genre, JikanAnime, JikanAnimeResponse, JikanGenreResponse, SingleJikanAnimeResponse } from "../types/types";

const api = axios.create({
    baseURL: 'https://api.jikan.moe/v4',
    timeout: 5000,
})

axiosRetry(api, {
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


export async function fetcher<T>(url: string): Promise<ApiResponse<T>> {
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
    const { data: rawData, error } = await fetcher<SingleJikanAnimeResponse>('/random/anime');
    if (error || !rawData || !rawData.data) return { data: null, error: "Error to get anime data" }
    return { data: setAnime(rawData.data) }
}

export async function getAnimeById(anime_id: number): Promise<ApiResponse<Anime>> {
    const { data: rawData, error } = await fetcher<SingleJikanAnimeResponse>(`/anime/${anime_id}`);
    if (error || !rawData || !rawData.data) return { data: null, error: "Error to get anime data" }
    return { data: setAnime(rawData.data) }
}


export async function getAnimeTop(page: number = 1): Promise<ApiResponse<AnimeListStructure>> {
    try {
        const { data: rawData, error } = await fetcher<JikanAnimeResponse>(`/top/anime?page=${page}`);
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
        const { data: rawData, error } = await fetcher<JikanGenreResponse>('/genres/anime');
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
        const { data: rawData, error } = await fetcher<JikanAnimeResponse>(`/anime?q=${q}&genres=${genres.map(el => el.id)}&page=${page}&limit=${limit}`);
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

function setAnime(data: JikanAnime): Anime {
    const anime: Anime = {
        id: data.mal_id,
        title: data.title_english ? data.title_english : data.title,
        titleJp: data.title_japanese,
        genres: data.genres.map((el: { mal_id: number; name: string; }) => ({ id: el.mal_id, name: el.name })),
        image: data.images.webp.large_image_url,
        type: data.type,
        episodes: data.episodes,
        duration: data.duration,
        theme: data.themes.map((el: { name: string; }) => el.name),
        rating: data.rating,
        source: data.source,
        synopsis: data.synopsis
    }
    return anime;
}
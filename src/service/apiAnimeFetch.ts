/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { Anime, AnimeData, Genre } from "../types/types";
import axiosRetry from "axios-retry";

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


export async function fetcher(url: string) {
    try {
        const res = await api.get(url);
        return res.data;
    } catch (error: any) {
        if (error.response) {
            console.log('Помилка від сервера', error.response.status, error.response.data);
        } else if (error.request) {
            console.log('Немає відповіді від сервера', error.request);
        } else {
            console.log("Проблема в axios", error.message)
        }
        return [];
    }
}

export async function getAnimeRandom() {
    const res = await fetcher('/random/anime');
    const data = res.data;
    return setAnime(data)
}

export async function getAnimeByQuery(q: string) {
    const res = await fetcher(`/anime?q=${q}`);
    return await res.json();
}

export async function getAnimeTop(page: number = 1): Promise<AnimeData | 'bad request'> {
    try {
        const data = await fetcher(`/top/anime?page=${page}`);
        const animes: Anime[] = data.data.map((el: any) => setAnime(el));
        return {
            animelist: animes,
            pagination: {
                last_visible_page: data.pagination.last_visible_page,
                current_page: data.pagination.current_page,
                items: {
                    per_page: data.pagination.items.per_page
                }
            }
        };
    } catch (er) {
        console.log(er)
        return 'bad request'
    }
}

export async function getAnimeByGenres(genres: Genre[], page: number = 1): Promise<AnimeData> {
    const res = await fetcher(`/anime?genres=${genres.map(el => el.id + ', ')}&page=${page}&limit='24`);
    const data = await res.json();
    return {
        animelist: data.data,
        pagination: {
            last_visible_page: data.pagination.last_visible_page,
            current_page: data.pagination.current_page,
            items: {
                per_page: data.pagination.items.per_page
            }
        }
    };
}

export async function getAnimeById(id: Anime['id']): Promise<Anime> {
    const res = await fetcher(`/anime/${id}`);
    const data = res.data;
    return setAnime(data);
}

export async function getAnimeNews() {
    const res = await fetcher('');
    return await res.json();
}

export async function getGenresAnime(): Promise<Genre[]> {
    try {
        const data = await fetcher('/genres/anime');
        const genres: Genre[] = data.data.map((el: { mal_id: number, name: string }) => ({ id: el.mal_id, name: el.name }));
        return genres;
    }
    catch (er) {
        console.log(er)
        return [];
    }
}

export async function getAnimeByFilter(genres: Genre[] = [], q: string = '', page: number = 1, limit: number = 25): Promise<AnimeData | 'bad request'> {
    try {
        const res = await fetcher(`/anime?q=${q}&genres=${genres.map(el => el.id)}&page=${page}&limit=${limit}`);
        const animes = res.data.map((el: any) => setAnime(el))
        return {
            animelist: animes,
            pagination: {
                last_visible_page: res.pagination.last_visible_page,
                current_page: res.pagination.current_page,
                items: {
                    per_page: res.pagination.items.per_page
                }
            }
        };
    } catch (error) {
        console.log(error, 'getAnimeByFilter ERROR')
        return 'bad request';
    }

}

function setAnime(data: any): Anime {
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
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Anime {
  id: number,
  title: string,
  titleJp: string,
  genres: Genre[],
  image: string | StaticImport;
  type: string,
  episodes: number,
  duration: string,
  theme: string[],
  rating: string,
  source: string,
  synopsis: string
}

export interface Genre {
  id: number;
  name: string;
}

export type GenreState = {
  genre: Genre;
  isActive: boolean
}

export type ApiResponse<T> = {
  data: T | null;
  error?: string;
};

export type JikanResponse = {
  data: any[];
  pagination: {
    last_visible_page: number;
    current_page: number;
    items: { per_page: number };
  };
};

export type AnimeListStructure = {
  animelist: Anime[];
  pagination: {
    last_visible_page: number;
    current_page: number;
    items: { per_page: number };
  };
}
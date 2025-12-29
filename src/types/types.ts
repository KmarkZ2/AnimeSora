import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { User as SupabaseUser } from '@supabase/supabase-js';

// === ТИП ДЛЯ JIKAN (ОДНЕ АНІМЕ) ===

// Допоміжний маленький тип, щоб не дублювати код для genres, studios і т.д.
type JikanResource = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

// Допоміжний тип для картинок
type JikanImages = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

// Тип аніме від Jikan
export type JikanAnime = {
  mal_id: number;
  url: string;
  images: {
    jpg: JikanImages;
    webp: JikanImages;
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: { day: number | null; month: number | null; year: number | null };
      to: { day: number | null; month: number | null; year: number | null };
      string: string | null;
    };
  };
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: JikanResource[];
  licensors: JikanResource[];
  studios: JikanResource[];
  genres: JikanResource[];
  explicit_genres: JikanResource[];
  themes: JikanResource[];
  demographics: JikanResource[];
};


// === ТИП ДЛЯ APP ===
export interface Anime {
  id: number,
  title: string,
  titleJp: string | null,
  genres: Genre[],
  image: string | StaticImport;
  type: string | null,
  episodes: number | null,
  duration: string | null,
  theme: string[],
  rating: string | null,
  source: string | null,
  synopsis: string | null
}

export interface Genre {
  id: number;
  name: string;
}

export type GenreState = {
  genre: Genre;
  isActive: boolean
}

export type AnimeListStructure = {
  animelist: Anime[];
  pagination: {
    last_visible_page: number;
    current_page: number;
    items: { per_page: number };
  };
}

export type ApiResponse<T> = {
  data: T | null;
  error?: string;
};

// === ТИП ДЛЯ JIKANRESPONSE ===
export type JikanAnimeResponse = {
  data: JikanAnime[];
  pagination: {
    last_visible_page: number;
    current_page: number;
    items: { per_page: number };
  };
};

export type SingleJikanAnimeResponse = {
  data: JikanAnime
}

export type JikanGenreResponse = {
  data: JikanResource[];
};

// === ТИП ДЛЯ SUPABASE ===
export interface UserProfile {
  id: string;
  username: string | null;     // Може бути null, якщо юзер ще не задав нік
  full_name: string | null;    // Ім'я з реєстрації
  avatar_url: string | null;   // Посилання на картинку
  email: string | null;        // Ми дублюємо email сюди для зручності
  updated_at?: string | null;
}

export type User = SupabaseUser;

export interface UserWithProfile {
  user: User | null;         // Системні дані (id, last_sign_in_at)
  profile: UserProfile | null; // Публічні дані (username, avatar)
}

export interface UpdateProfileData {
  full_name?: string;
  username?: string;
  avatar_url?: string;
}
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

export interface AnimeNewsCard {
  anime: Anime
  image: string | StaticImport;
  text: string;
  color: {
    shadow: string;
    text: string;
  };
  className?: string;
}
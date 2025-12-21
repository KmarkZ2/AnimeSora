"use client";

import { GenreState } from "@/types/types";
import BGBlock from "@/ui/BGBlock";
import GenreItem from "./GenreItem";
import Button from "@/ui/Button";

type GenreModalProps = {
  genresState: GenreState[];
  onGenreToggle: (genre_id: number) => void;
};

export default function GenreModal({ genresState, onGenreToggle }: GenreModalProps) {
  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap gap-2.5 overflow-y-auto">
        {genresState.map((genre) => (
          <GenreItem genre_state={genre} onClick={onGenreToggle} key={genre.genre.id} />
        ))}
      </div>
    </div>
  );
}

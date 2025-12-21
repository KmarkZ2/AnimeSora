"use client";

import GenreModal from "./GenreModal";
import { GenreState } from "@/types/types";

export default function GenreWindow({
  genresState,
  onGenreToggle,
}: {
  genresState: GenreState[];
  onGenreToggle: (genre_id: number) => void;
}) {
  return (
    <div className="relative">
      <GenreModal genresState={genresState} onGenreToggle={onGenreToggle} />
    </div>
  );
}

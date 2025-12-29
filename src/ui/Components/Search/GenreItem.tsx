"use client";

import { GenreState } from "@/types/types";
import Button from "@/ui/Button";

export default function GenreItem({
  genre_state,
  onClick,
}: {
  genre_state: GenreState;
  onClick: (genre_id: number) => void;
}) {
  return (
    <Button
      type="button"
      onClick={() => onClick(genre_state.genre.id)}
      variant="filter"
      isActive={genre_state.isActive}
    >
      <span className="truncate text-[#B0B0B0]">{genre_state.genre.name}</span>
    </Button>
  );
}

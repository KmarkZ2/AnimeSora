"use client";

import { GenreState } from "@/types/types";
import clsx from "clsx";

export default function GenreItem({
  genre_state,
  onClick,
}: {
  genre_state: GenreState;
  onClick: (genre_id: number) => void;
}) {
  return (
    <button
      type="button"
      className={clsx(
        "p-[2px] duration-150 transition-colors rounded-[10px] ",
        genre_state.isActive ? "bg-gradient-to-r from-[#790069] to-[#006B79]" : "bg-[#1a1a1a]"
      )}
      onClick={() => onClick(genre_state.genre.id)}
    >
      <div className="px-4 py-2 bg-[#121212] rounded-[10px]">
        <span className="truncate text-[#B0B0B0]">{genre_state.genre.name}</span>
      </div>
    </button>
  );
}

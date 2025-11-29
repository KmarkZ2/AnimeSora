"use client";

import { Genre, GenreState } from "@/types/types";
import BGBlock from "@/ui/BGBlock";
import GenreItem from "./GenreItem";
import Button from "@/ui/Button";

type GenreModalProps = {
  genresState: GenreState[];
  isOpen: boolean;
  onClose: () => void;
  onGenreToggle: (genre_id: number) => void;
};

export default function GenreModal({ isOpen, onClose, genresState, onGenreToggle }: GenreModalProps) {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full min-w-[1000px]">
      <BGBlock className="p-2.5">
        <div className="flex flex-row flex-wrap gap-2.5 overflow-y-auto">
          {genresState.map((genre) => (
            <GenreItem genre_state={genre} onClick={onGenreToggle} key={genre.genre.id} />
          ))}
        </div>
        <Button bgColor="#790069" onClick={onClose} text="Close" className="mt-5 m-[0_auto]" />
      </BGBlock>
    </div>
  );
}

"use client";

import Button from "@/ui/Button";
import { useState } from "react";
import GenreModal from "./GenreModal";
import { GenreState } from "@/types/types";

export default function GenreWindow({
  genresState,
  onGenreToggle,
}: {
  genresState: GenreState[];
  onGenreToggle: (genre_id: number) => void;
}) {
  const [isGenreModalOpen, setIsGenreModalOpen] = useState(false);

  const onOpenGenreModal = () => {
    if (isGenreModalOpen) return;
    setIsGenreModalOpen(true);
  };
  const onCloseGenreModal = () => {
    if (!isGenreModalOpen) return;
    setIsGenreModalOpen(false);
  };

  return (
    <div className="relative">
      <Button
        bgColor="#006B79"
        onClick={onOpenGenreModal}
        text="Genres"
        toglebtn={{ activeBgColor: "#790069", isActive: isGenreModalOpen }}
      />
      <GenreModal
        isOpen={isGenreModalOpen}
        onClose={onCloseGenreModal}
        genresState={genresState}
        onGenreToggle={onGenreToggle}
      />
    </div>
  );
}

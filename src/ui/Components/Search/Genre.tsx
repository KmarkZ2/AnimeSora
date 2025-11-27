"use client";

import Button from "@/ui/Button";
import { useState } from "react";
import GenreModal from "./GenreModal";

export default function GenreWindow() {
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
        text="Close"
        toglebtn={{ activeBgColor: "#790069", isActive: isGenreModalOpen }}
      />
      <GenreModal isOpen={isGenreModalOpen} onClose={onCloseGenreModal} />
    </div>
  );
}

"use client";

import BGBlock from "@/ui/BGBlock";

export default function GenreModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div>
      <BGBlock>
        <div></div>
      </BGBlock>
    </div>
  );
}

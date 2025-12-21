"use client";

import { GenreState } from "@/types/types";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { startTransition, useState, useTransition } from "react";
import GenreWindow from "./Genre";
import { useRouter, useSearchParams } from "next/navigation";
import GenreModal from "./GenreModal";

type SearchComponentProps = {
  genres: GenreState[];
};

export default function SearchComponent({ genres }: SearchComponentProps) {
  const [genresState, setGenresState] = useState<GenreState[]>(genres);
  const [searchInput, setSearchInput] = useState("");
  const [isPending, setTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearchHandle = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchInput) {
      params.set("query", searchInput);
    } else {
      params.delete("query");
    }
    params.delete("genre");
    const newGenresArray: string[] = [...genresState.filter((el) => el.isActive).map((el) => el.genre.name)];
    newGenresArray.forEach((el) => params.append("genre", el));

    startTransition(() => {
      router.push(`search?${params.toString()}`);
    });
  };

  const onGenreToggle = (genre_id: number) => {
    setGenresState((prev) =>
      prev.map((el) => (el.genre.id === genre_id ? { genre: el.genre, isActive: !el.isActive } : el))
    );
  };

  return (
    <div className="md:py-[20px] md:px-[50px] px-[10px] py-[5px] bg-[rgba(18,18,18,0.1)] border-[1px] border-[rgba(255,255,255,0.2)] rounded-[10px] w-full blur-[20px]">
      <div className="flex flex-col gap-[20px]">
        <Input input={searchInput} setInput={setSearchInput} placeholder="Enter title" />
        <GenreModal genresState={genresState} onGenreToggle={onGenreToggle} />
        <Button onClick={() => onSearchHandle()} variant="neon-pink" isLoading={isPending}>
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}

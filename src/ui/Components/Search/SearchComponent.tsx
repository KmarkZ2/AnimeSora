"use client";

import { GenreState } from "@/types/types";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { useState } from "react";
import GenreWindow from "./Genre";
import { useRouter, useSearchParams } from "next/navigation";

type SearchComponentProps = {
  genres: GenreState[];
};

export default function SearchComponent({ genres }: SearchComponentProps) {
  const [genresState, setGenresState] = useState<GenreState[]>(genres);
  const [searchInput, setSearchInput] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearchHandle = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchInput) {
      params.set("query", searchInput);
    } else {
      params.delete("query");
    }
    params.set("genre", genresState.join(""));

    router.push(`search?${params.toString()}`);
  };

  const onGenreToggle = (genre_id: number) => {
    setGenresState((prev) =>
      prev.map((el) => (el.genre.id === genre_id ? { genre: el.genre, isActive: !el.isActive } : el))
    );
  };

  return (
    <div className="flex flex-col md:gap-[30px] gap-[10px] items-center w-full">
      <div className="flex justify-between items-center w-2/3">
        <GenreWindow genresState={genresState} onGenreToggle={onGenreToggle} />
        <Input input={searchInput} setInput={setSearchInput} placeholder="Enter title" />
        <Button
          text={"Search"}
          bgColor={"#790035"}
          onClick={() => onSearchHandle()}
          className="md:w-[150px] md:h-[60px] w-[100px] h-[40px]"
        />
      </div>
    </div>
  );
}

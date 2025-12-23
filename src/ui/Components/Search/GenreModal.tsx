"use client";

import { GenreState } from "@/types/types";
import GenreItem from "./GenreItem";
import Button from "@/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

type GenreModalProps = {
  genresState: GenreState[];
  onGenreToggle: (genre_id: number) => void;
  onClearHandler: () => void;
};

export default function GenreModal({ genresState, onGenreToggle, onClearHandler }: GenreModalProps) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="flex flex-col w-full border-2 border-[rgba(255,255,255,0.2)] rounded-[10px] relative">
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{ height: isShowMore ? "auto" : 200 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className={"flex flex-row flex-wrap justify-center gap-2.5 p-5 duration-200"}>
          {genresState.map((genre) => (
            <GenreItem genre_state={genre} onClick={onGenreToggle} key={genre.genre.id} />
          ))}
        </div>
      </motion.div>
      <div className="flex flex-row justify-end relative p-5">
        <Button
          variant="neon-blue"
          onClick={() => setIsShowMore((prev) => !prev)}
          className="absolute left-1/2 -translate-x-1/2"
        >
          {isShowMore ? "Show less" : "Show more"}
        </Button>
        <Button variant="neon-blue" onClick={onClearHandler} className="">
          Clear
        </Button>
      </div>
    </div>
  );
}

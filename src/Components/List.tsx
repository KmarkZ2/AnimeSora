"use client";

import { Anime } from "@/app/types/types";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import Button from "./Button";
import Link from "next/link";

type ListParams = {
  displayedList: Anime[];
  page: number;
  totalPages: number;
  onNextHandle: () => void;
  onPrevHande: () => void;
};

export default function List({
  displayedList,
  page,
  totalPages,
  onNextHandle,
  onPrevHande,
}: ListParams) {
  return (
    <div className="flex flex-col gap-[20px] justify-center">
      <div className="flex flex-row flex-wrap justify-center gap-[50px]">
        {displayedList.map((el) => (
          <Link href={`./animes/${el.id}`} key={`${el.id}-${el.title}`}>
            <AnimeCard {...el} />
          </Link>
        ))}
      </div>
      {displayedList.length > 1 && (
        <div className="flex justify-center items-center gap-[20px]">
          <Button
            disabled={page === 1}
            text={"Prev"}
            bgColor={"#002A79"}
            onClick={onPrevHande}
          />
          <span className="text-[1rem] font-[Poppins] font-normal text-[#B0B0B0] text-center">
            {page}/{totalPages}
          </span>
          <Button
            disabled={page === totalPages}
            text={"Next"}
            bgColor={"#002A79"}
            onClick={onNextHandle}
          />
        </div>
      )}
    </div>
  );
}

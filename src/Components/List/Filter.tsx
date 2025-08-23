"use client";

import { getAnimeByFilter } from "@/app/service/apiAnimeFetch";
import { Anime, Genre } from "@/app/types/types";
import { SearchParameters } from "@/app/genre/page";
import { useEffect, useState } from "react";
import List from "../List";

type ListFilterParams = {
  filters: SearchParameters;
};

export default function ListFilter({ filters }: ListFilterParams) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    getAnimeByFilter(filters.genres, filters.searchInput, page).then((data) => {
      if (data === "bad request") {
        return;
      } else {
        setPage(data.pagination.current_page);
        setTotalPages(data.pagination.last_visible_page);
        setAnimeList(data.animelist);
      }
    });
  }, [page]);

  return (
    <div>
      <List
        displayedList={animeList}
        page={page}
        totalPages={totalPages}
        onNextHandle={() => {
          setPage((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onPrevHande={() => {
          setPage((prev) => prev - 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}

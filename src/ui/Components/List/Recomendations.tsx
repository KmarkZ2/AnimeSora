"use client";

import { useEffect, useState } from "react";
import List from "../List";
import { Anime } from "@/types/types";
import { getAnimeTop } from "@/service/apiAnimeFetch";

export default function Recomendations() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    getAnimeTop(page).then((data) => {
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

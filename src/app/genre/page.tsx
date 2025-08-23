"use client";

import Button from "@/Components/Button";
import { getGenresAnime } from "../service/apiAnimeFetch";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Genre } from "../types/types";
import ListFilter from "@/Components/List/Filter";
import Recomendations from "@/Components/List/Recomendations";

export type SearchParameters = {
  genres: Genre[];
  type: "Anime" | "Manga";
  searchInput: string;
};

export default function Genres() {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const [selectedButton, setSelectedButtons] = useState<Genre[]>([]);
  const [searchParameter, setSearchParameter] = useState<SearchParameters>({
    searchInput: "",
    genres: [],
    type: "Anime",
  });

  const displayedGenres = isOpen ? genres : genres.slice(0, 8);

  const onGenreHandle = (genre: Genre) => {
    setSelectedButtons((prev) => {
      const exist = prev.some((el) => el === genre);
      return exist ? prev.filter((g) => g !== genre) : [...prev, genre];
    });
  };
  const onTypeHandle = (type: SearchParameters["type"]) => {
    setSearchParameter((prev) => {
      const exist = prev.type === type;
      return {
        ...prev,
        type: exist ? prev.type : type,
      };
    });
  };
  const onSearchHandle = () => {
    setSearchParameter((prev) => ({
      ...prev,
      genres: [...selectedButton],
      searchInput: searchInput,
    }));
  };

  useEffect(() => {
    getGenresAnime().then((data) => {
      setGenres(data);
    });
  }, []);

  return (
    <div className="md:p-[50px] p-[5px] pt-[10px] flex flex-col items-center">
      <div className="flex flex-col gap-[10px] md:gap-[30px]">
        <div className="flex justify-center w-full">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="bg-none border-[#121212] md:border-[5px] border-[2px] rounded-[10px] text-center md:h-[45px] md:max-w-[580px] w-full max-w-[350px] h-[30px] text-[#E0E0E0] md:text-[1rem] text-[0.75rem] font-[Poppins] font-normal"
          />
        </div>
        <div className="flex md:gap-[20px] gap-[10px] flex-wrap">
          {displayedGenres.map((el) => (
            <Button
              key={`${el.id}-${el.name}`}
              text={el.name}
              bgColor="#006B79"
              onClick={() => onGenreHandle(el)}
              toglebtn={{
                activeBgColor: "#790069",
                isActive: selectedButton.includes(el),
              }}
            />
          ))}
          {genres.length > 8 && (
            <Button
              text={isOpen ? "▲" : "▼"}
              bgColor={"#2b2b2bff"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="md:text-[1.25rem] text-[1rem]"
            />
          )}
        </div>
        {/* <div className="flex flex-row gap-[20px]">
          <Button
            text={"Anime"}
            bgColor={"#006B79"}
            toglebtn={{
              activeBgColor: "#790069",
              isActive: searchParameter.type === "Anime",
            }}
            onClick={() => onTypeHandle("Anime")}
          />
          <Button
            text={"Manga"}
            bgColor={"#006B79"}
            toglebtn={{
              activeBgColor: "#790069",
              isActive: searchParameter.type === "Manga",
            }}
            onClick={() => onTypeHandle("Manga")}
          />
        </div> */}
      </div>
      <Button
        text={"Search"}
        bgColor={"#790035"}
        onClick={() => onSearchHandle()}
        className="md:w-[150px] md:h-[60px] md:mt-[30px] w-[100px] h-[40px] mt-[15px]"
      />
      <div className="md:mt-[50px] mt-[25px]">
        {searchParameter.genres.length < 1 &&
        searchParameter.searchInput === "" ? (
          <Recomendations />
        ) : (
          <ListFilter
            key={JSON.stringify(searchParameter)}
            filters={searchParameter}
          />
        )}
      </div>
    </div>
  );
}

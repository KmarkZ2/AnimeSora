"use client";

import { Genre } from "@/types/types";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { useState } from "react";
import GenreWindow from "./Genre";

type SearchComponentProps = {
  genres: Genre[];
};

export default function SearchComponent({ genres }: SearchComponentProps) {
  const [searchInput, setSearchInput] = useState("");

  const onSearchHandle = () => {};

  return (
    <div className="flex flex-col md:gap-[30px] gap-[10px] items-center w-full">
      <div className="flex justify-between items-center w-2/3">
        <GenreWindow />
        <Input
          input={searchInput}
          setInput={setSearchInput}
          placeholder="Enter title"
        />
        {/* <Filters/> */}
      </div>
      <div>
        <Button
          text={"Search"}
          bgColor={"#790035"}
          onClick={() => onSearchHandle()}
          className="md:w-[150px] md:h-[60px] md:mt-[30px] w-[100px] h-[40px] mt-[15px]"
        />
      </div>
    </div>
  );
}

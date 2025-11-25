import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { AnimeNewsCard } from "@/types/types";

export default function NewsCard(card: AnimeNewsCard) {
  return (
    <div
      className={`flex flex-row md:max-w-[985px] max-w-[440px] md:h-[298px] h-[149] bg-black rounded-[10px]`}
      style={{
        boxShadow: `0 0 0 7px #121212, 0 0 30px 0 ${card.color.shadow}`,
      }}
    >
      <div className="relative md:w-[529px] w-[264] w-full flex-1 overflow-hidden">
        <Image
          src={card.image}
          alt={"Image"}
          fill
          className={`object-cover rounded-l-[10px] ${card.className}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_55%)]"></div>
      </div>

      <div className="md:pt-[30px] pt-[15px] md:pr-[25px] pr-[12px] md:pb-[20px] pb-[10px] md:pl-[25px] pl-[12px] flex flex-col md:gap-[10px] gap-[5px] flex-1">
        <div className="flex flex-col md:gap-[20px] gap-[10px]">
          <h2
            className={
              "font-[Orbitron] font-bold md:text-[1.5rem] text-[1rem] p-[0px] text-center"
            }
            style={{ color: card.color.text }}
          >
            {card.anime.title}
          </h2>
          <p className="text-[#B0B0B0] font-[Poppins] font-normal md:text-[1rem] text-[0.75px] md:max-h-[152px] max-h-[76px] overflow-y-auto scrollbar-custom">
            {card.text}
          </p>
        </div>
        <div className="flex justify-end mt-auto">
          <Link href={`./movie/${card.anime.id}`}>
            <Button
              text={"Watch →"}
              bgColor={"#225EB8"}
              onClick={() => {}}
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

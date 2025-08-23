import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import Link from "next/link";
import { AnimeNewsCard } from "@/app/types/types";

export default function NewsCard(card: AnimeNewsCard) {
  return (
    <div
      className={`flex flex-row max-w-[985px] h-[298px] bg-black rounded-[10px]`}
      style={{
        boxShadow: `0 0 0 7px #121212, 0 0 30px 0 ${card.color.shadow}`,
      }}
    >
      <div className="relative w-[529px] w-full flex-1 overflow-hidden">
        <Image
          src={card.image}
          alt={"Image"}
          fill
          className={`object-cover rounded-l-[10px] ${card.className}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.96)_55%)]"></div>
      </div>

      <div className="pt-[30px] pr-[25px] pb-[20px] pl-[25px] flex flex-col gap-[10px] flex-1">
        <div className="flex flex-col gap-[20px]">
          <h2
            className={
              "font-[Orbitron] font-bold text-[1.5rem] p-[0px] text-center"
            }
            style={{ color: card.color.text }}
          >
            {card.anime.title}
          </h2>
          <p className="text-[#B0B0B0] font-[Poppins] font-normal text-[1rem] max-h-[152px] overflow-y-auto scrollbar-custom">
            {card.text}
          </p>
        </div>
        <div className="flex justify-end mt-auto">
          <Link href={`./movie/${card.anime.id}`}>
            <Button text={"Watch →"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

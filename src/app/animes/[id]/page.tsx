import { getAnimeById } from "../../service/apiAnimeFetch";
import Image from "next/image";

type AnimePageParams = {
  params: { id: string };
};

export default async function AnimePage({ params }: AnimePageParams) {
  const { id } = await params;
  const anime = await getAnimeById(parseInt(id));
  return (
    <div className="mt-[30px] w-full pl-[100px]">
      <div className="flex flex-col gap-[20px]">
        <h2 className="p-[0px] font-[Poppins] font-bold text-[1.75rem] text-[#E0E0E0]">
          {anime.title}
        </h2>
        <div className="flex gap-[55px]">
          <div className="flex-shrink-0">
            <Image
              src={anime.image}
              alt="Image"
              width={250}
              height={450}
              className="rounded-xl object-contain max-h-[500px] w-auto"
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="">
              <p className="text-[#B0B0B0] text-[1.5rem] font-[Poppins] font-regular ml-[50px]">
                Information
              </p>
              <ul className="flex flex-col gap-[3px] mt-[20px] text-[#B0B0B0] text-[1rem] font-[Poppins]">
                <li>
                  <span className="font-bold">
                    Type: <span className="font-normal">{anime.type}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Episodes:{" "}
                    <span className="font-normal">{anime.episodes}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Duration:{" "}
                    <span className="font-normal">{anime.duration}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Genres:{" "}
                    <span className="font-normal">
                      {anime.genres.map((el) => el.name).join(", ")}
                    </span>
                  </span>
                </li>
                {anime.theme.length > 0 && (
                  <li>
                    <span className="font-bold">
                      Theme:{" "}
                      <span className="font-normal">
                        {anime.theme.join(", ")}
                      </span>
                    </span>
                  </li>
                )}

                <li>
                  <span className="font-bold">
                    Rating: <span className="font-normal">{anime.rating}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Source: <span className="font-normal">{anime.source}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Title Jp:{" "}
                    <span className="font-normal">{anime.titleJp}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Title Eng:{" "}
                    <span className="font-normal">{anime.title}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-[Poppins] text-[#B0B0B0] font-normal">
              <p className="text-[1.5rem] ml-[50px]">Synopsis</p>
              <p className="text-[1rem] mt-[30px]">{anime.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

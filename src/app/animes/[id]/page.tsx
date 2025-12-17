import { getAnimeById } from "../../../service/apiAnimeFetch";
import Image from "next/image";

type AnimePageParams = {
  params: { id: string };
};

export default async function AnimePage({ params }: AnimePageParams) {
  const { id } = await params;
  const { data: anime, error } = await getAnimeById(parseInt(id));

  if (error || !anime) return <div>Error to load data</div>;

  return (
    <div className="md:mt-[30px] mt-[15px] w-full md:pl-[100px] pl-[25px] pr-[10px] pb-[10px]">
      <div className="flex flex-col md:gap-[20px] gap-[10px]">
        <h2 className="p-[0px] font-[Poppins] font-bold md:text-[1.75rem] text-[1rem] text-[#E0E0E0]">{anime.title}</h2>
        <div className="flex md:gap-[55px] gap-[25px]">
          <div className="flex-shrink-0">
            <Image
              src={anime.image}
              alt="Image"
              sizes="md:250 150"
              width={250}
              height={450}
              className="rounded-xl object-contain md:max-h-[500px] max-h-[250px] w-auto"
            />
          </div>
          <div className="flex flex-col md:gap-[50px] gap-[25px]">
            <div className="">
              <p className="text-[#B0B0B0] md:text-[1.5rem] text-[1rem] font-[Poppins] font-regular md:ml-[50px] ml-[25px]">
                Information
              </p>
              <ul className="flex flex-col gap-[3px] md:mt-[20px] mt-[10px] text-[#B0B0B0] md:text-[1rem] text-[0.75rem] font-[Poppins]">
                <li>
                  <span className="font-bold">
                    Type: <span className="font-normal">{anime.type}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Episodes: <span className="font-normal">{anime.episodes}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Duration: <span className="font-normal">{anime.duration}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Genres: <span className="font-normal">{anime.genres.map((el) => el.name).join(", ")}</span>
                  </span>
                </li>
                {anime.theme.length > 0 && (
                  <li>
                    <span className="font-bold">
                      Theme: <span className="font-normal">{anime.theme.join(", ")}</span>
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
                    Title Jp: <span className="font-normal">{anime.titleJp}</span>
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Title Eng: <span className="font-normal">{anime.title}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block font-[Poppins] text-[#B0B0B0] font-normal">
              <p className="md:text-[1.5rem] text-[1rem] md:ml-[50px] ml-[25px]">Synopsis</p>
              <p className="md:text-[1rem] text-[0.75rem] md:mt-[30px] mt-[15px]">{anime.synopsis}</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden font-[Poppins] text-[#B0B0B0] font-normal">
          <p className="md:text-[1.5rem] text-[1rem] md:ml-[50px] ml-[25px]">Synopsis</p>
          <p className="md:text-[1rem] text-[0.75rem] md:mt-[30px] mt-[15px]">{anime.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

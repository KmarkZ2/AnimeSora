"use client";

import { getNews } from "@/lib/createNews";
import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState<any>();
  useEffect(() => {
    const main = async () => {
      const data = await getNews();
      setNews(data);
    };
    main();
  }, []);

  return (
    <div className="md:pt-[50px] pt-[25px] pl-[278px] pr-[277px] md:pb-[50px] pb-[25px] flex flex-col items-center md:gap-[100px] gap-[50px]">
      <pre>{JSON.stringify(news, null, 2)}</pre>
      {/* {news.map(el=>{
      return <NewsCard card={el}/>})} */}
      {/* <NewsCard
        title="Demon Slayer"
        image="/posterDS.png"
        text="New 5  season will be a next cvartal. New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal."
        color={{ shadow: "rgba(161,67,0,0.25)", text: "rgba(161,67,0,1)" }}
      ></NewsCard>
      <NewsCard
        title="Solo Leveling"
        image="/posterS.png"
        text="New 5  season will be a next cvartal. New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal."
        color={{ shadow: "rgba(0,161,161,0.25)", text: "rgba(0,224,255,1)" }}
      ></NewsCard>
      <NewsCard
        title="Jujutsu Kaisen"
        image="/posterJ.png"
        text="New 5  season will be a next cvartal. New 5  season will be a next cvartal.New 5 New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal."
        color={{
          shadow: "rgba(0, 70, 161, 0.25)",
          text: "rgba(0, 102, 255, 1)",
        }}
      ></NewsCard>
      <NewsCard
        title="Eminence in Shadow"
        image="/cardEminence.jpg"
        text="New 5  season will be a next cvartal. New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a next cvartal.New 5  season will be a nexNew 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New New 5  season will be a next cvartal. New 5  season will be a next cvartal.New t cvartal.New 5  season will be a next cvartal."
        color={{
          shadow: "rgba(161,0,134,0.25)",
          text: "rgba(161,0,134,1)",
        }}
        className="scale-x-[-1] rounded-r-[10px]"
      ></NewsCard> */}
    </div>
  );
}

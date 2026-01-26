export default function AnimeListSkeleton() {
  return (
    <div className="md:mt-[50px] mt-[25px]">
      <div className="flex flex-col md:gap-[20px] gap-[10px] justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center md:gap-[50px] gap-[25px]">
          {Array.from({ length: 10 }).map((el, index) => {
            return (
              <div
                key={index}
                className="relative md:w-[286px] w-[143px] md:h-[344px] h-[172px] animate-pulse border border-white rounded-2xl overflow-hidden shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

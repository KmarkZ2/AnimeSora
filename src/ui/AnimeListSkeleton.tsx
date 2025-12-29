export default function AnimeListSkeleton() {
  return (
    <div className="md:mt-[50px] mt-[25px]">
      <div className="flex flex-col md:gap-[20px] gap-[10px] justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center md:gap-[50px] gap-[25px]">
          {Array.from({ length: 10 }).map((el, index) => {
            return (
              <div
                key={index}
                className="relative md:w-[286px] w-[143px] md:h-[344px] h-[172px] bg-gray-700 animate-pulse border-[#121212] md:border-[7px] border-[3px] rounded-[10px] md:gap-[10px] gap-[5px] overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.98)_65%)] rounded-[7px]"></div>
                <div className="flex flex-col md:gap-[10px] gap-[5px] md:pl-[10px] pl-[5px] md:pr-[10px] pr-[5px] md:pb-[10px] pb-[5px] font-bold md:text-[1rem] text-[0.5rem] text-[#E0E0E0] absolute bottom-0 left-0 right-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

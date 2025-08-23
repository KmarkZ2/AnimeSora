export default function Footer() {
  return (
    <footer className="flex items-center md:h-[200px] h-[100px] justify-between md:pl-[50px] md:pr-[50px] pl-[5px] pr-[5px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-t-[10px]">
      <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold md:text-[1.75rem] text-[0.75rem]">
        AnimeSora
      </h2>
      <div className="flex items-center justify-center md:gap-[120px] gap-[50px] md:min-h-[108px] min-h-[48px] text-[#B0B0B0]">
        <div className="flex md:gap-[20px] gap-[10px] flex-col">
          <p className="font-normal md:text-[1.5rem] text-[0.75rem] font-[Orbitron]">
            Contacts
          </p>
          <ul className="flex flex-col md:gap-[10px] gap-[5px] md:text-[1rem] text-[0.5rem]">
            <li>+380689392060</li>
            <li>markkm68@gmail.com</li>
          </ul>
        </div>
        <div className="flex md:gap-[20px] gap-[10px] flex-col">
          <p className="font-normal md:text-[1.5rem] text-[0.75rem] font-[Orbitron]">
            Socioals
          </p>
          <ul className="flex flex-col md:gap-[10px] gap-[5px] md:text-[1rem] text-[0.5rem]">
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-[#E0E0E0] font-[NotoSansJP] font-bold md:text-[1.75rem] text-[0.75rem]">
        アニメ空
      </h2>
    </footer>
  );
}

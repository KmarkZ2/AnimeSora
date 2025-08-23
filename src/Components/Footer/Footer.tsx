export default function Footer() {
  return (
    <footer className=" flex items-center h-[200px] justify-between pl-[50px] pr-[50px] bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-t-[10px]">
      <h2 className="text-[#E0E0E0] font-[Orbitron] font-bold text-[1.75rem]">
        AnimeSora
      </h2>
      <div className="flex items-center justify-center gap-[120px] min-h-[108px] text-[#B0B0B0]">
        <div className="flex gap-[20px] flex-col">
          <p className="font-normal text-[1.5rem] font-[Orbitron]">Contacts</p>
          <ul className="flex flex-col gap-[10px] text-[1rem]">
            <li>+380689392060</li>
            <li>markkm68@gmail.com</li>
          </ul>
        </div>
        <div className="flex gap-[20px] flex-col">
          <p className="font-normal text-[1.5rem] font-[Orbitron]">Socioals</p>
          <ul className="flex flex-col gap-[10px] text-[1rem]">
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-[#E0E0E0] font-[NotoSansJP] font-bold text-[1.75rem]">
        アニメ空
      </h2>
    </footer>
  );
}

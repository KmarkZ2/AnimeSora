export default function Contacts() {
  return (
    <div className="flex items-center justify-center md:gap-[120px] gap-[50px] md:min-h-[108px] min-h-[48px] text-[#B0B0B0]">
      <div className="flex md:gap-[20px] gap-[10px] flex-col">
        <p className="font-normal md:text-[1.5rem] text-[0.75rem] font-[Orbitron]">
          Contacts
        </p>
        <ul className="flex flex-col md:gap-[10px] gap-[5px] md:text-[1rem] text-[0.5rem] font-[Poppins]">
          <li>+380689392060</li>
          <li>markkm68@gmail.com</li>
        </ul>
      </div>
      <div className="flex md:gap-[20px] gap-[10px] flex-col">
        <p className="font-normal md:text-[1.5rem] text-[0.75rem] font-[Orbitron]">
          Socioals
        </p>
        <ul className="flex flex-col md:gap-[10px] gap-[5px] md:text-[1rem] text-[0.5rem] font-[Poppins]">
          <li>
            <a
              href="https://t.me/decoili"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/channels/meight0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

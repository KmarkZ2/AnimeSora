export default function SelectItem({ text, onClick, isActive }: { text: string; isActive: boolean; onClick: () => void }) {
  return (
    <li
      className="px-1.5 py-1 w-full text-white font-normal text-[14px] text-center bg-transparent transition-all duration-150 hover:bg-[rgba(255,255,255,0.6)] hover:text-[rgba(0,0,0,0.6)]"
      onClick={onClick}
    >
      <button disabled={isActive}>{text}</button>
    </li>
  );
}

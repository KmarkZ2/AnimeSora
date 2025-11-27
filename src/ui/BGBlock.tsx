export default function BGBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#121212d9] border-[rgba(0,224,255,0.2)] border-[1px] shadow-[0_0_20px_0_rgba(255,79,216,0.03),_0_0_70px_0_rgba(255,79,216,0.2)] rounded-b-[10px] backdrop-blur-[8px]">
      {children}
    </div>
  );
}

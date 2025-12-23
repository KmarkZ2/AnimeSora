export default function Input({
  input,
  setInput,
  placeholder,
}: {
  input: string;
  setInput: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder={placeholder}
      className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] md:border-[2px] border-[2px] rounded-[10px] text-center md:h-[45px] md:max-w-[580px] w-full max-w-[350px] h-[30px] text-[#E0E0E0] md:text-[1rem] text-[0.75rem] font-[Poppins] font-normal"
    />
  );
}

type ButtonProps = {
  text: string;
  bgColor: string;
  onClick: () => void;
  toglebtn?: {
    activeBgColor: string;
    isActive: boolean;
  };
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  bgColor,
  onClick,
  toglebtn,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-center overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:horizontal] p-[5px] rounded-[10px] md:w-[100px] w-[60px] md:h-[56px] h-[33px] text-[#E0E0E0] font-[Poppins] font-bold md:text-[1rem] text-[0.5rem] cursor-pointer ${className}`}
      style={{
        background: toglebtn?.isActive ? toglebtn.activeBgColor : bgColor,
      }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}

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
      className={`text-ellipsis overflow-hidden p-[5px] rounded-[10px] w-[100px] h-[56px] text-[#E0E0E0] font-[Poppins] font-bold text-[1rem] cursor-pointer ${className}`}
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

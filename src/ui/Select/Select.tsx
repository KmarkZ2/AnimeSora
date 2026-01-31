import { useState } from "react";
import SelectButton from "./SelectButton";
import ModalBg from "../ModalBg";
import SelectItem from "./SelectItem";

export default function Select({
  items,
  text,
  onSelect,
  active,
}: {
  items: string[];
  text: string;
  onSelect: (selectedElement: string) => void;
  active: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <label className="text-[18px] font-medium text-white">{text}</label>
      <SelectButton text={active} onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <ModalBg className="w-full absolute top-full left-0 max-h-56 overflow-y-auto">
          <ul>
            {items.map((el, index) => (
              <SelectItem key={index} isActive={active === el} onClick={() => onSelect(el)} text={el} />
            ))}
          </ul>
        </ModalBg>
      )}
    </div>
  );
}

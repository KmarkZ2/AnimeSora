"use client";

import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlayerStore from "@/store/usePlayerStore";
import { Player } from "@/types/types";

export default function PlayerSelect({ players }: { players: Player[] }) {
  const { setPlayer, player } = usePlayerStore();

  const onSetPlayer = (playerId: string) => {
    const player = players.filter((el) => el.name === playerId)[0] || null;
    setPlayer(player);
  };

  return (
    <Field>
      <Select defaultValue="banana">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent position={"popper"}>
          <SelectGroup>
            {players.map((el) => (
              <SelectItem value={el.name} onClick={() => onSetPlayer(el.name)} key={el.name}>
                {el.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}

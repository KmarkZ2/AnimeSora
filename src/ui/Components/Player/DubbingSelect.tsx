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
import { Dubbing } from "@/types/types";

export default function DubbingSelect({ dubbings }: { dubbings: Dubbing[] }) {
  const { setDubbing } = usePlayerStore();

  const onSetDubbing = (dubbingId: string) => {
    const dubbing = dubbings.filter((el) => el.name === dubbingId)[0] || null;
    setDubbing(dubbing);
  };

  return (
    <Field>
      <Select defaultValue="banana">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent position={"popper"}>
          <SelectGroup>
            {dubbings.map((el) => (
              <SelectItem value={el.name} onClick={() => onSetDubbing(el.name)}>
                {el.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}

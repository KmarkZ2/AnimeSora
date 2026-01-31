"use client";

import usePlayerStore from "@/store/usePlayerStore";
import { Dubbing } from "@/types/types";
import Select from "@/ui/Select/Select";

export default function DubbingSelect({ dubbings }: { dubbings: Dubbing[] }) {
  const { setDubbing, dubbing } = usePlayerStore();

  const onSetDubbing = (dubbingId: string) => {
    const dubbing = dubbings.filter((el) => el.name === dubbingId)[0] || null;
    setDubbing(dubbing);
  };

  return <Select active={dubbing?.name || ""} items={dubbings.map((el) => el.name)} onSelect={onSetDubbing} text="Озвучка" />;
}

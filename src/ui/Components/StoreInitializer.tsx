"use client";

import useUserStore from "@/store/useUserStore";
import { UserWithProfile } from "@/types/types";
import { useRef } from "react";

export default function StoreInitializer({ user }: { user: UserWithProfile | null }) {
  const initializedId = useRef<string | undefined | null>(undefined);

  const userId = user?.user?.id || null;

  if (initializedId.current !== userId) {
    useUserStore.setState({ user: user });
    initializedId.current = userId;
  }

  return null;
}

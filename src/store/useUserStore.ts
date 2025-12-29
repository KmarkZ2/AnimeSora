import { UserWithProfile } from "@/types/types";
import { create } from "zustand";

interface UserStore {
    user: UserWithProfile | null;
    setUser: (user: UserWithProfile | null) => void;
    clearUser: () => void
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user_data: UserWithProfile | null) => set({ user: user_data }),
    clearUser: () => set({ user: null })
}))

export default useUserStore
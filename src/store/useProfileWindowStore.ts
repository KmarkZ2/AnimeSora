import { create } from "zustand";

interface ProfileWindow {
    isOpen: boolean;
    openWindow: () => void;
    closeWindow: () => void;
}

const useProfileWindowStore = create<ProfileWindow>((set) => ({
    isOpen: false,
    openWindow: () => set({ isOpen: true }),
    closeWindow: () => set({ isOpen: false }),
}))

export default useProfileWindowStore;
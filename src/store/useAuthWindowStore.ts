import { create } from 'zustand'

interface AuthWindowState {
    isOpenWindow: boolean,
    authType: 'login' | 'register' | null,
    setIsOpenWindow: (isOpen: boolean, authType: 'login' | 'register') => void,
    setAuthType: (authType: 'login' | 'register') => void,
    closeWindow: () => void,
};

const useAuthWindowStore = create<AuthWindowState>((set) => ({
    isOpenWindow: false,
    authType: null,
    setIsOpenWindow: (isOpen, authType = "login") => set({ isOpenWindow: isOpen, authType: authType }),
    setAuthType: (authType) => set({ authType: authType }),
    closeWindow: () => set({ isOpenWindow: false, authType: null }),
}));

export default useAuthWindowStore
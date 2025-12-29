import { create } from "zustand";

interface Notification {
    visible: boolean,
    type: "successful" | "error" | "info",
    message: string,
    timeoutId: NodeJS.Timeout | null,

    showNotification: (type: "successful" | "error" | "info", message: string) => void;
    closeNotification: () => void;
}

const useNotificationStore = create<Notification>((set, get) => ({
    visible: false,
    type: "info",
    message: "",
    timeoutId: null,
    showNotification(type, message) {
        const oldTimeoutId = get().timeoutId
        if (oldTimeoutId) clearTimeout(oldTimeoutId);

        set({ visible: true, type, message })

        const newTimeoutId = setTimeout(() => {
            set({ visible: false })
        }, 5000)

        set({ timeoutId: newTimeoutId });
    },
    closeNotification() {
        set({ visible: false })
    },
}))

export default useNotificationStore;
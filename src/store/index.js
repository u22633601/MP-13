import { create } from 'zustand'

export const loggedInUserStore = create((set) => ({
    user: null,
    logoutUser: () => set({ user: null }),
    loginUser: (newUser) => set({ user: newUser }),
}))
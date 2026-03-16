import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useUserStore = create(persist((set) => ({
  user : null,
  accessToken: null,
  setUser: (userData) => set({
    user: {email: userData.email, id: userData.id},
    accessToken: userData.accessToken
  }),
  logout: () => {
    set({ user: null, accessToken: null})
  },
}),
{name: "user-auth"}
))
import { create } from "zustand"

export const UseClosetStore = create((set) => ({
  allClothes: [],
  selectedTop: null,
  selectedBottom: null,
  selectedFullBody: null,

  setClothes: (clothes) => set({ allClothes: clothes }),
  selectTop: (garment) => set({ selectedTop: garment }),
  selectBottom: (garment) => set({ selectedBottom: garment }),
  selectFullBody: (garment) => set({ selectedFullBody: garment })
}))
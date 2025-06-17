import { create } from "zustand";
import { MarkerType } from "../types/marker";

interface MarkerFormStore {
  marker: Partial<MarkerType>;
  setField: (field: keyof MarkerType, value: string | number) => void;
  setMarker: (marker: Partial<MarkerType>) => void;
  reset: () => void;
}

export const useMarkerFormStore = create<MarkerFormStore>((set) => ({
  marker: {},
  setField: (field, value) => set((state) => ({ marker: { ...state.marker, [field]: value } })),
  setMarker: (marker => set({ marker })),
  reset: () => set({ marker: {} }),
}));
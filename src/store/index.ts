import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SearchStore } from "../interface";

export const useSearchStore = create<SearchStore>()(
  devtools((set) => ({
    searchValue: "",
    handleSearch: (value: string) => {
      set({ searchValue: value });
    },
  }))
);

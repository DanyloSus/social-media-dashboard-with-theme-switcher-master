import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DarkModeProps {
  isDark: boolean;
  changeIsDark: () => void;
}

const useDarkMode = create<DarkModeProps>()(
  devtools((set) => ({
    isDark: true,
    changeIsDark: () => {
      set((s) => ({ isDark: !s.isDark }));
    },
  }))
);

export default useDarkMode;

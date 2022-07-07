import { useEffect, useState } from "react";

const colorThemeKey = "color-theme";
type ColorTheme = "dark" | "light";

const persistColorTheme = (colorTheme: ColorTheme): void => {
  localStorage.setItem(colorThemeKey, colorTheme);
};

const getColorTheme = (): ColorTheme => {
  const colorTheme = localStorage.getItem(colorThemeKey);
  if (typeof colorTheme === "string") {
    return colorTheme === "dark" ? "dark" : "light";
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  return userMedia.matches ? "dark" : "light";
};

const updateRootElement = (colorTheme: ColorTheme): void => {
  window.document.documentElement.classList.remove("dark", "light");
  window.document.documentElement.classList.add(colorTheme);
};

export const mockMatchMedia = (matches: boolean = false) =>
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: () => ({ matches }),
  });

export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(getColorTheme() === "dark");

  useEffect(() => {
    const colorTheme = isDark ? "dark" : "light";
    persistColorTheme(colorTheme);
    updateRootElement(colorTheme);
  }, [isDark]);

  return [isDark, (): void => setIsDark(!isDark)];
}

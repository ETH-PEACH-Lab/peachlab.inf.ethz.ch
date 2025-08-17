"use client";
import { GeistProvider, CssBaseline, Themes } from "@geist-ui/core";
import { useState, useEffect, createContext, useContext } from "react";

// Create a Theme Context
const ThemeContext = createContext();
export function useThemeSwitcher() {
  return useContext(ThemeContext);
}

// ✅ Custom Light Theme
const customLightTheme = Themes.createFromLight({
  type: "custom-light",
  palette: {
    link: "#0073e6",
    foreground: "#373737",
    background: "#fff",
    selection: "#fcd7d7"
  },
});

// ✅ Custom Dark Theme
const customDarkTheme = Themes.createFromDark({
  type: "custom-dark",
  palette: {
    link: "#66b3ff",
    foreground: "#fff",
    background: "#000",
    selection: "#fcd7d7"
  },
});

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  const [themeType, setThemeType] = useState("custom-light");

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setThemeType(dark ? "custom-dark" : "custom-light");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("darkMode", themeType === "custom-dark");
    document.documentElement.classList.remove("custom-light", "custom-dark");
    document.documentElement.classList.add(themeType);
  }, [themeType, mounted]);

  if (!mounted) {
    return null; // Prevent Hydration Mismatch
  }

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType }}>
      <GeistProvider themeType={themeType} themes={[customLightTheme, customDarkTheme]}>
        <CssBaseline />
        {children}
      </GeistProvider>
    </ThemeContext.Provider>
  );
}
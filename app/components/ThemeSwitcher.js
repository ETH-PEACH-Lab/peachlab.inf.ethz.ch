"use client";

import { useState } from "react";
import { Button } from "@geist-ui/core";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Button auto icon={darkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

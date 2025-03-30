"use client";

import "./styles.css";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering during SSR

  return (
    <div
      className="themeIconWrapper"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <CiLight /> : <MdDarkMode />}
    </div>
  );
}

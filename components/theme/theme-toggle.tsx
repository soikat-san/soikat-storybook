"use client";
import "./styles.css";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import HydrationWrapper from "@/app/hydration-wrapper";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <HydrationWrapper>
      <div
        className="themeIconWrapper"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <CiLight /> : <MdDarkMode />}
      </div>
    </HydrationWrapper>
  );
}

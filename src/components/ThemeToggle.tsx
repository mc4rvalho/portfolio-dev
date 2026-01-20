import { useEffect, useState } from "react";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Alternar tema"
      title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {isDark ? (
        <img src={sunIcon} alt="Tema claro" className="w-6 h-6 invert" />
      ) : (
        <img src={moonIcon} alt="Tema escuro" className="w-6 h-6" />
      )}
    </button>
  );
};

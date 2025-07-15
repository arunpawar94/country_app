import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setStorage] = useLocalStorage("theme", "light");
  const changeTheme = () => {
    const newTheme = theme === "light"? "dark": "light";
    setStorage(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
        {theme === "dark" && <style>
        {
          `
            body {
              background-color: #403e3e;
              color: white;
            }
          `
        }
      </style>}
    </ThemeContext.Provider>
  );
}

import { createContext, useContext, useState } from "react";

interface ThemeProviderData {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderData>({} as ThemeProviderData);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme,
    }}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be inside ThemeProvider');
  }

  return context;
}
import React, { createContext, useContext, useEffect } from 'react';
import { useColorScheme } from 'nativewind';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: {
    bg: string;
    cardBg: string;
    text: string;
    subText: string;
    icon: string;
    divider: string;
    border: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  useEffect(() => {
    if (!colorScheme) {
      setColorScheme('dark');
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  const colors = {
    bg: isDarkMode ? 'bg-black' : 'bg-[#E5E5E5]',
    cardBg: isDarkMode ? 'bg-[#1C1C1E]' : 'bg-[#E5E5E5]',
    text: isDarkMode ? 'text-white' : 'text-[#2b1d3f]',
    subText: isDarkMode ? 'text-[#8e8e93]' : 'text-[#684920]',
    icon: isDarkMode ? '#FFFFFF' : '#2b1d3f',
    divider: isDarkMode ? 'bg-[#EAB308]/50' : 'bg-[#e9b978]',
    border: isDarkMode ? 'border-gray-800' : 'border-[#e9b978]',
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProviderWrapper');
  }
  return context;
};

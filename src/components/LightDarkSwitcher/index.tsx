import { useEffect } from 'react';

export default function AutoThemeDetector() {
  const lightTheme: string = import.meta.env.VITE_LIGHT_THEME;
  const darkTheme: string = import.meta.env.VITE_DARK_THEME;

  const getSystemPreference = (): string => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme;
    }
    return lightTheme;
  };

  const applyTheme = () => {
    const selectedTheme = getSystemPreference();
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme', selectedTheme);
  };

  useEffect(() => {
    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = () => {
      applyTheme();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, [lightTheme, darkTheme]);

  return null;
}

"use client";

import { ThemeProvider, useTheme } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();

  setTheme("system");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

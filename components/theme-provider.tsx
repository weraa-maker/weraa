"use client"

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: 'class' | 'data-theme' | 'data-mode';
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

// ThemeProvider component that leverages next-themes
export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 
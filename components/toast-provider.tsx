'use client';

import { Toaster } from 'sonner';
import { useTheme } from 'next-themes';

export function ToastProvider() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className: 'rounded-md border-border text-foreground',
        duration: 5000,
      }}
      theme={theme as 'light' | 'dark' | 'system'}
      closeButton
    />
  );
} 
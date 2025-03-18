"use client"

import * as React from "react"

// Simple placeholder ThemeProvider that doesn't rely on next-themes
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 
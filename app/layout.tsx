import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

// Initialize the Outfit font
const font = Outfit({ subsets: ['latin'] });

// Metadata for the document head
export const metadata: Metadata = {
  title: 'weraa',
  description: 'Reliable service for your outsourcing needs.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// RootLayout component wraps all pages
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieConsent from '@/components/cookie-consent'
import { Providers } from './providers'

const font = Outfit({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  variable: '--font-outfit', // Enable usage as a CSS variable
})

export const metadata: Metadata = {
  metadataBase: new URL('https://weraa.vercel.app'),
  title: {
    default: 'Weraa - Data Annotation and Labeling Solutions',
    template: '%s | Weraa'
  },
  description: 'Weraa provides expert data annotation and labeling services for AI, ML, and content moderation, empowering enterprises with high-quality data solutions.',
  keywords: ['data annotation', 'data labeling', 'AI data', 'machine learning', 'content moderation', 'image annotation', 'text annotation'],
  authors: [{ name: 'Weraa' }],
  creator: 'Weraa',
  publisher: 'Weraa',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: 'https://weraa.vercel.app',
    languages: {
      'en-US': 'https://weraa.vercel.app',
      'x-default': 'https://weraa.vercel.app',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weraa.vercel.app',
    siteName: 'Weraa',
    title: 'Weraa - Data Annotation and Labeling Solutions',
    description: 'Expert data annotation and labeling services for AI, ML, and content moderation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weraa - Data Annotation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weraa - Data Annotation and Labeling Solutions',
    description: 'Expert data annotation and labeling services for AI, ML, and content moderation.',
    images: ['/images/twitter-image.jpg'],
    creator: '@weraa',
  },
}

// Move viewport configuration to dedicated export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to relevant domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics - Next.js recommended way */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXX');
          `}
        </Script>
      </head>
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
        <CookieConsent />
      </body>
    </html>
  )
}

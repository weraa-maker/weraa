import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieConsent from '@/components/cookie-consent'

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        {/* Preconnect to relevant domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body className={font.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

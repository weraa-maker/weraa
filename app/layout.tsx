import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieConsent from '@/components/cookie-consent'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.weraa.com',
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.weraa.com" />
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

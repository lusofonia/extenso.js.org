import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Inter, JetBrains_Mono, Libre_Franklin as V0_Font_Libre_Franklin, Source_Code_Pro as V0_Font_Source_Code_Pro } from 'next/font/google'
import { FloatingDeployAd } from '@/components/floating-ad'

const _libreFranklin = V0_Font_Libre_Franklin({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceCodePro = V0_Font_Source_Code_Pro({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: 'Extenso.js | Números por extenso em JavaScript',
  description: 'Uma biblioteca avançada para escrever números por extenso em português. Suporte a BigInt, múltiplas moedas, dialetos e escalas. Zero dependências, 100% TypeScript.',
  keywords: ['javascript', 'typescript', 'números por extenso', 'extenso', 'português', 'biblioteca', 'npm', 'bigint', 'moedas', 'open source', 'zero dependências'],
  authors: [{ name: 'Fidalgo IT Solutions', url: 'https://fidalgoitsolutions.com.br' }],
  creator: 'Fidalgo IT Solutions',
  publisher: 'Fidalgo IT Solutions',
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['pt_PT'],
    url: 'https://extenso.js.org',
    siteName: 'Extenso.js',
    title: 'Extenso.js | Números por extenso em JavaScript',
    description: 'Uma biblioteca avançada para escrever números por extenso em português. Suporte a BigInt, múltiplas moedas, dialetos e escalas. Zero dependências, 100% TypeScript.',
    images: [
      {
        url: 'https://extenso.js.org/og-banner.png',
        width: 1280,
        height: 627,
        alt: 'Extenso.js - Números por extenso com JavaScript',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Extenso.js | Números por extenso em JavaScript',
    description: 'Uma biblioteca avançada para escrever números por extenso em português. Suporte a BigInt, múltiplas moedas, dialetos e escalas. Zero dependências, 100% TypeScript.',
    images: ['https://extenso.js.org/og-banner.png'],
    creator: '@fidalgoitsolutions',
  },

  // Additional metadata
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

  // Category
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Extenso.js',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              description: 'Uma biblioteca avançada para escrever números por extenso em português. Suporte a BigInt, múltiplas moedas, dialetos e escalas.',
              url: 'https://extenso.js.org',
              image: 'https://extenso.js.org/og-banner.png',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'BRL',
              },
              author: {
                '@type': 'Organization',
                name: 'Fidalgo IT Solutions',
                url: 'https://fidalgoitsolutions.com.br',
              },
              downloadUrl: 'https://www.npmjs.com/package/extenso',
              softwareVersion: '2.1.0',
              programmingLanguage: ['JavaScript', 'TypeScript'],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        {children}
        <FloatingDeployAd />
        <Analytics />
      </body>
    </html>
  )
}

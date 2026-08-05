import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://extenso.js.org'),
  title: 'Extenso.js — Números por extenso em JavaScript',
  description: 'Biblioteca JavaScript para escrever números, moedas, frações, percentuais e medidas por extenso nas variantes dos países lusófonos e de Macau.',
  keywords: [
    'números por extenso',
    'números por extenso JavaScript',
    'português',
    'português brasileiro',
    'português europeu',
    'países lusófonos',
    'Angola',
    'Brasil',
    'Cabo Verde',
    'Guiné-Bissau',
    'Macau',
    'Moçambique',
    'Portugal',
    'São Tomé e Príncipe',
    'valores monetários por extenso',
    'javascript',
    'typescript',
    'bigint',
    'npm',
  ],
  authors: [{ name: 'Matheus Alves', url: 'https://www.linkedin.com/in/matheusalvesbrx/' }],
  creator: 'Matheus Alves',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['pt_AO', 'pt_CV', 'pt_GW', 'pt_MO', 'pt_MZ', 'pt_PT', 'pt_ST'],
    url: 'https://extenso.js.org',
    siteName: 'Extenso.js',
    title: 'Extenso.js — Números por extenso em JavaScript',
    description: 'Números, moedas, frações, percentuais e medidas por extenso para os países lusófonos e Macau.',
    images: [
      {
        url: 'https://extenso.js.org/og.png',
        width: 1200,
        height: 630,
        alt: 'Extenso.js — números por extenso para o mundo lusófono',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Extenso.js — Números por extenso em JavaScript',
    description: 'Números, moedas, frações, percentuais e medidas por extenso para os países lusófonos e Macau.',
    images: ['https://extenso.js.org/og.png'],
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

  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SPGR7GPW43"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SPGR7GPW43');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Extenso.js',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              description: 'Biblioteca JavaScript para escrever números, moedas, frações, percentuais e medidas por extenso nas variantes dos países lusófonos e de Macau.',
              inLanguage: ['pt-AO', 'pt-BR', 'pt-CV', 'pt-GW', 'pt-MO', 'pt-MZ', 'pt-PT', 'pt-ST'],
              url: 'https://extenso.js.org',
              image: 'https://extenso.js.org/og.png',
              isAccessibleForFree: true,
              author: {
                '@type': 'Person',
                name: 'Matheus Alves',
                url: 'https://www.linkedin.com/in/matheusalvesbrx/',
              },
              downloadUrl: 'https://www.npmjs.com/package/extenso',
              softwareVersion: '3.0.0',
              programmingLanguage: ['JavaScript', 'TypeScript'],
              featureList: [
                'Números por extenso',
                'Valores monetários',
                'Frações e percentuais',
                'Unidades de medida',
                'Escalas curta e longa',
                'Variantes dos países lusófonos e de Macau',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

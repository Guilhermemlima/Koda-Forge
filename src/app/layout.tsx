import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KodaForge — Sites que convertem',
  description:
    'Agência de criação de sites em Guarapuava, PR. Criamos, redesenhamos e mantemos sites com foco em conversão, desempenho e identidade visual. Atendemos todo o Brasil.',
  icons: {
    icon: [
      { url: '/favicon.ico',       sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-logo.png',  sizes: '48x48', type: 'image/png'    },
    ],
    apple:   '/favicon-logo.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'KodaForge — Sites que convertem',
    description: 'Agência de criação de sites em Guarapuava, PR. Sites profissionais com foco em conversão e SEO. Atendemos todo o Brasil.',
    url: 'https://kodaforge.com.br',
    siteName: 'KodaForge',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodaForge — Sites que convertem',
    description: 'Agência de criação de sites em Guarapuava, PR. Atendemos todo o Brasil.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'KodaForge',
    url: 'https://kodaforge.com.br',
    telephone: '+55-42-99125-0274',
    email: 'kodaforge2026@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guarapuava',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    areaServed: 'Brasil',
    priceRange: 'R$ 1.497 a R$ 5.997',
    sameAs: ['https://www.instagram.com/kodaforge/'],
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

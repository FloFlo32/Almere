import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Sloepverhuur Almere - Het leukste uitje op het water in Almere',
  description: 'Ontdek de veelzijdige stad Almere vanaf het water met een sloep van Sloepverhuur Almere.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
        {children}
        </LanguageProvider>
        <Script
          src="https://yetti.ai/widget/yetti-chat.js"
          data-widget-id="b678ffa6-e107-4eb5-8e39-790dfe4ac111"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

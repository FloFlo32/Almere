import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

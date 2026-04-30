'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      background: '#fff',
      borderBottom: '3px solid #2a9e26',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
    }}>
      <div style={{
        maxWidth: 1248,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100
      }}>
        <Link href="/">
          <img
            src="https://www.sloepverhuuralmere.nl/wp-content/uploads/2020/05/Logo_SloepverhuurAlmere_199x96.png"
            alt="Sloepverhuur Almere"
            style={{ height: 80, width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {[
            { label: 'HOME', href: '/' },
            { label: 'ROUTES', href: '/routes' },
            { label: 'TARIEVEN', href: '/tarieven' },
            { label: 'BOOTINSTRUCTIES', href: '/bootinstructies' },
            { label: 'CONTACT', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.5px',
              fontFamily: 'Montserrat, Arial, sans-serif'
            }}>
              {label}
            </Link>
          ))}
          <Link href="/boeken" style={{
            background: '#2a9e26',
            color: '#fff',
            padding: '10px 18px',
            borderRadius: 3,
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'Montserrat, Arial, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            RESERVEREN
          </Link>
          <div style={{ display: 'flex', gap: 8 }}>
            {['nl', 'en', 'de'].map(lang => (
              <img key={lang}
                src={`https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${lang}.png`}
                alt={lang.toUpperCase()}
                style={{ width: 22, cursor: 'pointer', border: '1px solid #ddd' }}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

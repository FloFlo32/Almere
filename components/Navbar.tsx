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
          <div style={{ display: 'flex', gap: 4, borderLeft: '1px solid #e0e0e0', paddingLeft: 20, marginLeft: 4 }}>
            {[
              { lang: 'nl', label: 'NL' },
              { lang: 'en', label: 'EN' },
              { lang: 'de', label: 'DE' },
            ].map(({ lang, label }) => (
              <button key={lang} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: 'none', border: '1px solid transparent',
                borderRadius: 4, padding: '4px 8px', cursor: 'pointer',
                fontSize: 12, fontWeight: 700, color: '#555',
                fontFamily: 'Montserrat, Arial, sans-serif',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a9e26')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
              >
                <img
                  src={`https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${lang}.png`}
                  alt={label}
                  style={{ width: 20, height: 14, objectFit: 'cover', borderRadius: 2, display: 'block' }}
                />
                {label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

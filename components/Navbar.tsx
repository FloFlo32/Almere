'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '../lib/LanguageContext'
import type { Lang } from '../lib/translations'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const current = LANGS.find(l => l.code === lang)!

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.routes, href: '/routes' },
    { label: t.nav.tarieven, href: '/tarieven' },
    { label: t.nav.bootinstructies, href: '/bootinstructies' },
  ]

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
        height: 80
      }}>
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Sloepverhuur Almere"
            style={{ height: 60, width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              color: '#2a9e26', textDecoration: 'none', fontSize: 13,
              fontWeight: 700, letterSpacing: '0.5px', fontFamily: 'Montserrat, Arial, sans-serif'
            }}>
              {label}
            </Link>
          ))}

          {/* WhatsApp */}
          <a href="https://wa.me/31683786325" target="_blank" rel="noopener"
            style={{ display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
            <WhatsAppIcon />
            <span style={{ color: '#25D366', fontWeight: 700, fontSize: 13 }}>+31 683 786 325</span>
          </a>

          <a href="https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn" target="_blank" rel="noopener" style={{
            background: '#2a9e26', color: '#fff', padding: '10px 18px', borderRadius: 3,
            textDecoration: 'none', fontSize: 13, fontWeight: 700,
            fontFamily: 'Montserrat, Arial, sans-serif', whiteSpace: 'nowrap'
          }}>
            {t.nav.reserveren}
          </a>

          {/* Language dropdown */}
          <div style={{ position: 'relative', borderLeft: '1px solid #e0e0e0', paddingLeft: 20, marginLeft: 4 }}>
            <button
              onClick={() => setLangOpen(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'none', border: '1px solid #ddd',
                borderRadius: 4, padding: '6px 10px', cursor: 'pointer',
                fontSize: 12, fontWeight: 700, color: '#333',
                fontFamily: 'Montserrat, Arial, sans-serif',
              }}
            >
              <img src={`/images/flag-${current.code}.png`} alt={current.label}
                style={{ width: 20, height: 14, objectFit: 'cover', borderRadius: 2 }} />
              {current.label}
              <span style={{ fontSize: 10, color: '#888', marginLeft: 2 }}>▼</span>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: '#fff', border: '1px solid #e0e0e0',
                borderRadius: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                overflow: 'hidden', minWidth: 110, zIndex: 10000,
              }}>
                {LANGS.map(l => (
                  <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '10px 14px',
                      background: l.code === lang ? '#f0f8f0' : 'transparent',
                      border: 'none', cursor: 'pointer', fontSize: 13,
                      fontWeight: l.code === lang ? 700 : 400,
                      color: l.code === lang ? '#2a9e26' : '#333',
                      fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'left',
                    }}
                    onMouseEnter={e => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = '#f5f5f5' }}
                    onMouseLeave={e => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  >
                    <img src={`/images/flag-${l.code}.png`} alt={l.label}
                      style={{ width: 22, height: 15, objectFit: 'cover', borderRadius: 2 }} />
                    {l.code === 'nl' ? 'Nederlands' : l.code === 'en' ? 'English' : 'Deutsch'}
                    {l.code === lang && <span style={{ marginLeft: 'auto', color: '#2a9e26' }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile: lang + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Mobile lang (always visible) */}
          <div style={{ position: 'relative' }} className="mobile-lang">
            <button onClick={() => setLangOpen(v => !v)} style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'none', border: '1px solid #ddd', borderRadius: 4,
              padding: '5px 8px', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#333'
            }}>
              <img src={`/images/flag-${current.code}.png`} alt={current.label}
                style={{ width: 18, height: 13, objectFit: 'cover', borderRadius: 2 }} />
              {current.label} <span style={{ fontSize: 9, color: '#888' }}>▼</span>
            </button>
            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: '#fff', border: '1px solid #e0e0e0',
                borderRadius: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                overflow: 'hidden', minWidth: 110, zIndex: 10000,
              }}>
                {LANGS.map(l => (
                  <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '10px 14px',
                      background: l.code === lang ? '#f0f8f0' : 'transparent',
                      border: 'none', cursor: 'pointer', fontSize: 13,
                      fontWeight: l.code === lang ? 700 : 400,
                      color: l.code === lang ? '#2a9e26' : '#333',
                      fontFamily: 'Montserrat, Arial, sans-serif', textAlign: 'left',
                    }}>
                    <img src={`/images/flag-${l.code}.png`} alt={l.label}
                      style={{ width: 22, height: 15, objectFit: 'cover', borderRadius: 2 }} />
                    {l.code === 'nl' ? 'Nederlands' : l.code === 'en' ? 'English' : 'Deutsch'}
                    {l.code === lang && <span style={{ marginLeft: 'auto', color: '#2a9e26' }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}
            style={{ color: '#2a9e26', textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
            {label}
          </Link>
        ))}
        <a href="https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn"
          target="_blank" rel="noopener"
          style={{
            background: '#2a9e26', color: '#fff', padding: '12px 18px',
            borderRadius: 4, textDecoration: 'none', fontWeight: 700,
            fontSize: 13, textAlign: 'center'
          }}>
          {t.nav.reserveren}
        </a>
      </div>

      {langOpen && (
        <div onClick={() => setLangOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }} />
      )}
    </header>
  )
}

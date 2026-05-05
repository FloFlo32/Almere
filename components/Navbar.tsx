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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const current = LANGS.find(l => l.code === lang)!

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
            { label: t.nav.home, href: '/' },
            { label: t.nav.routes, href: '/routes' },
            { label: t.nav.tarieven, href: '/tarieven' },
            { label: t.nav.bootinstructies, href: '/bootinstructies' },
            { label: t.nav.contact, href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{
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

          <a href="https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn" target="_blank" rel="noopener" style={{
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
              <img
                src={`https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${current.code}.png`}
                alt={current.label}
                style={{ width: 20, height: 14, objectFit: 'cover', borderRadius: 2 }}
              />
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
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '10px 14px',
                      background: l.code === lang ? '#f0f8f0' : 'transparent',
                      border: 'none', cursor: 'pointer',
                      fontSize: 13, fontWeight: l.code === lang ? 700 : 400,
                      color: l.code === lang ? '#2a9e26' : '#333',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = '#f5f5f5' }}
                    onMouseLeave={e => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                  >
                    <img
                      src={`https://www.sloepverhuuralmere.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/${l.code}.png`}
                      alt={l.label}
                      style={{ width: 22, height: 15, objectFit: 'cover', borderRadius: 2 }}
                    />
                    {l.code === 'nl' ? 'Nederlands' : l.code === 'en' ? 'English' : 'Deutsch'}
                    {l.code === lang && <span style={{ marginLeft: 'auto', color: '#2a9e26' }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Close dropdown when clicking outside */}
      {langOpen && (
        <div
          onClick={() => setLangOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9998 }}
        />
      )}
    </header>
  )
}

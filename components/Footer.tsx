'use client'
import { useLang } from '../lib/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ background: '#f9f9f9', borderTop: '1px solid #eee', padding: '60px 24px 30px' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
        <div>
          <img
            src="/images/logo.png"
            alt="Sloepverhuur Almere"
            style={{ height: 60, marginBottom: 16 }}
          />
          <p style={{ color: '#666', fontSize: 14 }}>{t.footer.tagline}</p>
          <p style={{ color: '#666', fontSize: 14, marginTop: 12 }}>{t.footer.open}</p>
          <p style={{ color: '#666', fontSize: 14, marginTop: 8 }}>KVK: 75634139</p>
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>{t.footer.nav}</h3>
          {[
            { label: t.nav.home, href: '/' },
            { label: t.nav.routes, href: '/routes' },
            { label: t.nav.tarieven, href: '/tarieven' },
            { label: t.nav.bootinstructies, href: '/bootinstructies' },
            { label: t.nav.contact, href: '/contact' },
          ].map(item => (
            <div key={item.href} style={{ marginBottom: 8 }}>
              <a href={item.href} style={{ color: '#666', textDecoration: 'none', fontSize: 14 }}>{item.label}</a>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>{t.footer.locations}</h3>
          {t.locations.items.map(loc => (
            <p key={loc.name} style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>{loc.name}</p>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>{t.footer.contact}</h3>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>info@sloepverhuuralmere.nl</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 16 }}>
            <a href="https://www.facebook.com/dekapiteinalmere/" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: '#2a9e26' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/dekapiteinalmere/" target="_blank" rel="noopener" aria-label="Instagram" style={{ color: '#2a9e26' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/nautica-experience/" target="_blank" rel="noopener" aria-label="LinkedIn" style={{ color: '#2a9e26' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1248, margin: '40px auto 0', borderTop: '1px solid #eee', paddingTop: 20, textAlign: 'center', color: '#999', fontSize: 13 }}>
        © {new Date().getFullYear()} Sloepverhuur Almere · {t.footer.privacy} · {t.footer.cookies}
      </div>
    </footer>
  )
}

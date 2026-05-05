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
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            {['facebook', 'instagram', 'linkedin'].map(s => (
              <a key={s} href="#" style={{ color: '#2a9e26', fontSize: 18 }}>●</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1248, margin: '40px auto 0', borderTop: '1px solid #eee', paddingTop: 20, textAlign: 'center', color: '#999', fontSize: 13 }}>
        © {new Date().getFullYear()} Sloepverhuur Almere · {t.footer.privacy} · {t.footer.cookies}
      </div>
    </footer>
  )
}

'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLang } from '../lib/LanguageContext'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

const LOCATION_IMGS = [
  'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/06/D20230111LOE-MT-SK-2822-1024x576-1.jpg',
  'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/06/HJBE220612550-1024x683-2.jpg',
]

const MEDIA_IMGS = [
  'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/Nederlandse_Spoorwegen_logo.svg.png',
  'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/311155141_540079848119239_2206287613562781740_n.jpg',
  'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/vf-logo-website-1800x1200px.jpg',
]

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: 8,
        overflow: 'hidden',
        margin: '40px auto',
        maxWidth: 1248,
        minHeight: 500
      }}>
        <div style={{
          backgroundImage: 'url(https://www.sloepverhuuralmere.nl/wp-content/uploads/2021/07/BootjesKapiteinSvenKraaijenbrink-64.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 400
        }} />
        <div style={{ background: '#2a9e26', padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>{t.hero.subtitle}</p>
          <h1 style={{ color: '#fff', fontSize: 46, fontFamily: 'Mansalva, serif', lineHeight: 1.3, marginBottom: 24 }}>
            {t.hero.title}
          </h1>
          <p style={{ color: '#fff', marginBottom: 32 }}>{t.hero.body}</p>
          <a href={YETTI_BOOK} style={{
            display: 'inline-block', background: 'transparent', border: '2px solid #fff',
            color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
            fontWeight: 700, marginBottom: 16, fontSize: 14
          }}>
            {t.hero.cta1}
          </a>
          <a href={YETTI_BOOK} style={{
            display: 'inline-block', background: 'transparent', border: '2px solid #fff',
            color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
            fontWeight: 700, fontSize: 14
          }}>
            {t.hero.cta2}
          </a>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 40, marginBottom: 16 }}>{t.locations.title}</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 60px' }}>
            {t.locations.subtitle}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {t.locations.items.map((loc, i) => (
              <div key={i} style={{
                border: '2px solid #2a9e26', borderRadius: 8, overflow: 'hidden',
                boxShadow: '0 4px 25px rgba(0,0,0,0.07)', background: '#fff'
              }}>
                <img src={LOCATION_IMGS[i]} alt={loc.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#555', marginBottom: 12 }}>{loc.name}</h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{loc.desc}</p>
                  <a href={YETTI_BOOK} style={{
                    display: 'block', textAlign: 'center', background: '#2a9e26', color: '#fff',
                    padding: '12px', borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 13
                  }}>
                    {t.locations.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '60px 24px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, textAlign: 'center' }}>
          {t.stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 80, fontWeight: 700, color: '#333', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: '#2a9e26', fontWeight: 700, fontSize: 16, marginTop: 8 }}>{s.label}</div>
              {'sub' in s && s.sub && <div style={{ color: '#2a9e26', fontSize: 14 }}>{s.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(https://www.sloepverhuuralmere.nl/wp-content/uploads/2021/08/BootjesKapiteinSvenKraaijenbrink-103-2-2-scaled.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '120px 24px', textAlign: 'center'
      }}>
        <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 40, whiteSpace: 'pre-line' }}>
          {t.cta.title}
        </h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={YETTI_BOOK} style={{
            background: '#fff', color: '#333', padding: '16px 32px', borderRadius: 4,
            textDecoration: 'none', fontWeight: 700, fontSize: 15
          }}>{t.cta.book}</a>
          <a href="/routes" style={{
            background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '16px 32px',
            borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 15
          }}>{t.cta.routes}</a>
        </div>
      </section>

      {/* ABOUT SECTIONS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
          {t.about.map(s => (
            <div key={s.title}>
              <h2 style={{ fontSize: 28, marginBottom: 16, color: '#333' }}>{s.title}</h2>
              <p style={{ color: '#666', lineHeight: 1.8 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '60px 24px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>{t.reviews.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {t.reviews.items.map(r => (
              <div key={r.name} style={{ background: '#fff', borderRadius: 8, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ color: '#fbbc04', fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{r.text}"</p>
                <strong style={{ color: '#333', fontSize: 14 }}>{r.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>{t.media.title}</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
            {t.media.items.map((m, i) => (
              <div key={m.alt} style={{ textAlign: 'center' }}>
                <img src={MEDIA_IMGS[i]} alt={m.alt} style={{ height: 50, objectFit: 'contain', display: 'block', margin: '0 auto 12px' }} />
                <p style={{ color: '#2a9e26', fontSize: 14, fontWeight: 600 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

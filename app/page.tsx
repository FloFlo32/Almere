'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLang } from '../lib/LanguageContext'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

const LOCATION_IMGS = [
  '/images/loetje-card.jpg',
  '/images/strand22-card.jpg',
]

const MEDIA_IMGS = [
  '/images/ns-logo.png',
  '/images/visit-almere.jpg',
  '/images/visit-flevoland.jpg',
]

function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto' }}>
        <div style={{ border: '2px solid #2a9e26', borderRadius: 8, overflow: 'hidden', background: '#f7f7f7' }}>
        <div className="faq-grid">
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', minHeight: 280, maxHeight: 320 }}>
            <img
              src="/images/faq.jpg"
              alt="FAQ"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 40px 40px 0' }}>
            <h2 className="section-title" style={{ fontSize: 36, marginBottom: 8 }}>{t.faq.title}</h2>
            <p style={{ color: '#666', marginBottom: 32 }}>{t.faq.subtitle}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {t.faq.items.map((item, i) => (
                <div key={i} style={{ borderTop: '1px solid #e5e5e5' }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '18px 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left', fontFamily: 'Montserrat, Arial, sans-serif',
                      fontWeight: 700, fontSize: 15, color: '#333'
                    }}
                  >
                    {item.q}
                    <span style={{ fontSize: 20, color: '#2a9e26', marginLeft: 16, flexShrink: 0 }}>
                      {open === i ? '−' : '+'}
                    </span>
                  </button>
                  {open === i && (
                    <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, paddingBottom: 18, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
              <div style={{ borderTop: '1px solid #e5e5e5' }} />
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="/contact" style={{
                display: 'inline-block', background: '#2a9e26', color: '#fff',
                padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
                fontWeight: 700, fontSize: 13
              }}>
                {t.faq.cta}
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-grid" style={{
        borderRadius: 8,
        overflow: 'hidden',
        margin: '40px auto',
        maxWidth: 1248,
        minHeight: 500
      }}>
        <div className="hero-image" style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="hero-text" style={{ background: '#2a9e26', padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>{t.hero.subtitle}</p>
          <h1 style={{ color: '#fff', fontSize: 46, fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.3, marginBottom: 24 }}>
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

          {/* Contact bubble */}
          <div className="hero-contact-bubble" style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 32 }}>
            <img
              src="/images/captain-avatar.jpg"
              alt="Heb je een vraag?"
              style={{ width: 68, height: 68, borderRadius: '50%', border: '3px solid #fff', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{t.hero.bubbleTitle}</p>
              <p style={{ color: '#fff', fontSize: 14, lineHeight: 1.6 }}>{t.hero.bubbleText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: 40, marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700 }}>{t.locations.title}</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 60px' }}>
            {t.locations.subtitle}
          </p>
          <div className="locations-grid">
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

      {/* FAQ */}
      <FAQ />

      {/* STATS */}
      <section style={{ padding: '60px 24px', background: '#f5f5f5' }}>
        <div className="stats-grid" style={{ maxWidth: 1248, margin: '0 auto' }}>
          {t.stats.map(s => (
            <div key={s.label}>
              <div className="stat-number">{s.num}</div>
              <div style={{ color: '#2a9e26', fontWeight: 700, fontSize: 16, marginTop: 8 }}>{s.label}</div>
              {'sub' in s && s.sub && <div style={{ color: '#2a9e26', fontSize: 14 }}>{s.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section" style={{
        backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '120px 24px', textAlign: 'center'
      }}>
        <h2 className="cta-title" style={{ color: '#fff', fontSize: 48, marginBottom: 40, whiteSpace: 'pre-line' }}>
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
        <div className="about-grid" style={{ maxWidth: 1248, margin: '0 auto' }}>
          {t.about.map(s => (
            <div key={s.title}>
              <h2 style={{ fontSize: 28, marginBottom: 16, color: 'var(--green)' }}>{s.title}</h2>
              <p style={{ color: '#666', lineHeight: 1.8 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '60px 24px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>{t.reviews.title}</h2>
          <div className="reviews-grid">
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

      {/* VIDEO */}
      <section style={{ padding: '60px 24px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: 36, marginBottom: 32 }}>{t.video.title}</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
            <iframe
              src="https://www.youtube.com/embed/Nq5LB22XcAY"
              title={t.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>{t.media.title}</h2>
          <div className="media-row" style={{ display: 'flex', justifyContent: 'center', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
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

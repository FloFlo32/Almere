'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useLang } from '../../lib/LanguageContext'
import { pageTranslations } from '../../lib/pageTranslations'

const YETTI_BOOK = 'https://almere.vercel.app/?yetti-rental=true&location=631aa7fb-90ae-4a7a-acce-d2d38f516b83'

export default function ContactPage() {
  const { lang } = useLang()
  const p = pageTranslations[lang].contact
  const cta = pageTranslations[lang].cta

  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 className="page-title-dark" style={{ marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            {p.title}
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 48 }}>{p.subtitle}</p>

          {/* FAQ block */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif', color: '#2a9e26' }}>{p.faqTitle}</h2>
            <p style={{ color: '#666', marginBottom: 12 }}>
              {p.faqText1}{' '}
              <a href="/" style={{ color: '#2a9e26' }}>{p.faqLink1}</a>.
            </p>
            <p style={{ color: '#666', marginBottom: 12 }}>
              {p.faqText2} <a href="/tarieven" style={{ color: '#2a9e26' }}>{p.faqLink2}</a>.
            </p>
            <p style={{ color: '#666', marginBottom: 24 }}>{p.faqText3}</p>
            <div style={{ textAlign: 'center' }}>
              <a href={`mailto:info@sloepverhuuralmere.nl?subject=Offerte`} style={{
                display: 'inline-block', background: '#2a9e26', color: '#fff',
                padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontWeight: 700
              }}>
                {p.offerteBtn}
              </a>
            </div>
          </div>

          {/* Contact form + info */}
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: 24, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif', color: '#2a9e26' }}>{p.formTitle}</h2>
              <p style={{ color: '#666', marginBottom: 20, lineHeight: 1.7 }}>
                {p.formIntro}{' '}
                <a href="tel:0363031807" style={{ color: '#2a9e26', fontWeight: 700 }}>036 3031 807</a>
              </p>

              <p style={{ fontWeight: 700, color: '#333', marginBottom: 4 }}>{p.loc1Name}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>{p.loc1Street}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>{p.loc1City}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>{p.loc1Note}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 24 }}>{p.loc1Extra}</p>

              <p style={{ fontWeight: 700, color: '#333', marginBottom: 4 }}>{p.loc2Name}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>{p.loc2Street}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>{p.loc2City}</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>{p.loc2Note}</p>
              <p style={{ color: '#666', fontSize: 14 }}>{p.loc2Extra}</p>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault()
                window.location.href = 'mailto:info@sloepverhuuralmere.nl'
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div className="form-row">
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    {p.firstName} <span style={{ color: '#e33' }}>*</span>
                  </label>
                  <input required type="text" placeholder={p.firstName} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>{p.lastName}</label>
                  <input type="text" placeholder={p.lastName} style={inputStyle} />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    {p.email} <span style={{ color: '#e33' }}>*</span>
                  </label>
                  <input required type="email" placeholder={p.email} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>{p.emailConfirm}</label>
                  <input type="email" placeholder={p.emailConfirm} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                  {p.message} <span style={{ color: '#e33' }}>*</span>
                </label>
                <textarea required rows={6} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" style={{
                background: '#2a9e26', color: '#fff', border: 'none',
                padding: '14px 28px', borderRadius: 4, fontWeight: 700,
                fontSize: 14, cursor: 'pointer', fontFamily: 'Montserrat, Arial, sans-serif',
                alignSelf: 'flex-start'
              }}>
                {p.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" style={{
        backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
      }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>{cta.tagline}</p>
        <h2 className="cta-banner-title">
          {cta.title}
        </h2>
        <a href={YETTI_BOOK} target="_blank" rel="noopener" style={{
          display: 'inline-block', background: 'transparent', border: '2px solid #fff',
          color: '#fff', padding: '12px 24px', borderRadius: 4,
          textDecoration: 'none', fontWeight: 700, fontSize: 13
        }}>
          {cta.btn}
        </a>
      </section>

      <Footer />
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 12px', border: '1px solid #ddd',
  borderRadius: 4, fontSize: 14, fontFamily: 'Montserrat, Arial, sans-serif',
  boxSizing: 'border-box'
}

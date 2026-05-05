'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useLang } from '../../lib/LanguageContext'
import { pageTranslations } from '../../lib/pageTranslations'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

export default function BootinstructiesPage() {
  const { lang } = useLang()
  const p = pageTranslations[lang].bootinstructies
  const cta = pageTranslations[lang].cta

  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          <h1 style={{ fontSize: 32, color: '#2a9e26', marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            {p.title}
          </h1>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>{p.intro}</p>

          {/* Video */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: 48, borderRadius: 8, overflow: 'hidden' }}>
            <iframe
              src="https://www.youtube.com/embed/UlqlS6MYFW4"
              title={p.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>

          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{p.varenTitle}</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>{p.varenText}</p>

          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{p.startTitle}</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.startPara1}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>{p.startPara2}</p>

          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{p.varenSectionTitle}</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.varenPara1}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.varenPara2}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.varenPara3}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.varenPara4}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            {p.varenPara5}{' '}
            <a href="tel:+31683786325" style={{ color: '#2a9e26', fontWeight: 700 }}>+31 683 786 325</a>.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>{p.varenPara6}</p>

          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{p.terugkomstTitle}</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.terugkomstPara1}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{p.terugkomstPara2}</p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 48 }}>{p.terugkomstPara3}</p>
        </div>
      </section>

      <section className="cta-banner" style={{
        backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
      }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>{cta.tagline}</p>
        <h2 className="cta-banner-title">
          {cta.title}
        </h2>
        <a href={YETTI_BOOK} style={{
          display: 'inline-block', background: 'transparent', border: '2px solid #fff',
          color: '#fff', padding: '12px 24px', borderRadius: 4,
          textDecoration: 'none', fontWeight: 700, fontSize: 13
        }}>{cta.btn}</a>
      </section>

      <Footer />
    </>
  )
}

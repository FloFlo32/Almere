'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: 40, marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Neem contact met ons op
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 48 }}>
            Sloepverhuur Almere komt graag met je in contact. Stuur ons een mailtje via het contactformulier hieronder.
          </p>

          {/* FAQ block */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>Veel gestelde vragen</h2>
            <p style={{ color: '#666', marginBottom: 12 }}>
              Heb je een vraag over het huren van een sloep? Wij hebben een lijst met antwoorden op de meest gestelde vragen gemaakt voor je,{' '}
              <a href="/" style={{ color: '#2a9e26' }}>bekijk deze hier</a>.
            </p>
            <p style={{ color: '#666', marginBottom: 12 }}>
              Alle informatie over tijden, tarieven en routes vind je op <a href="/tarieven" style={{ color: '#2a9e26' }}>deze pagina</a>.
            </p>
            <p style={{ color: '#666', marginBottom: 24 }}>
              Heb je een vraag over een bedrijfsuitje? Of wil je een vrijblijvende offerte aanvragen? Klik dan op de knop hieronder.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href={`mailto:info@sloepverhuuralmere.nl?subject=Vrijblijvende offerte`} style={{
                display: 'inline-block', background: '#2a9e26', color: '#fff',
                padding: '14px 28px', borderRadius: 4, textDecoration: 'none', fontWeight: 700
              }}>
                Vrijblijvende offerte aanvragen
              </a>
            </div>
          </div>

          {/* Contact form + info */}
          <div className="contact-grid">
            {/* Left: location info */}
            <div>
              <h2 style={{ fontSize: 24, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>Laat een bericht voor ons achter</h2>
              <p style={{ color: '#666', marginBottom: 20, lineHeight: 1.7 }}>
                Laat je bericht hieronder achter en wij komen binnen één werkdag op je bericht terug. Je kunt ons ook telefonisch bereiken via:{' '}
                <a href="tel:0363031807" style={{ color: '#2a9e26', fontWeight: 700 }}>036 3031 807</a>
              </p>

              <p style={{ fontWeight: 700, color: '#333', marginBottom: 4 }}>Locatie De Kapitein</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>Boelijn 70</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>1319 CS Almere</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>Meld je bij een van onze medewerkers op de steiger.</p>

              <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
                Wij beschikken over gratis parkeerplekken en bus M6 stopt om de hoek.
              </p>

              <p style={{ fontWeight: 700, color: '#333', marginBottom: 4 }}>Locatie Strand 22</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>Esplanade 14</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>1315 TA Almere</p>
              <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>Meld je bij een van onze medewerkers op de steiger.</p>

              <p style={{ color: '#666', fontSize: 14 }}>Flevoziekenhuis pakken, langs het ziekenhuis richting het water lopen.</p>
            </div>

            {/* Right: form */}
            <form
              onSubmit={e => {
                e.preventDefault()
                window.location.href = 'mailto:info@sloepverhuuralmere.nl'
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    Voornaam <span style={{ color: '#e33' }}>*</span>
                  </label>
                  <input required type="text" placeholder="Voornaam" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>Achternaam</label>
                  <input type="text" placeholder="Achternaam" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                    E-mailadres <span style={{ color: '#e33' }}>*</span>
                  </label>
                  <input required type="email" placeholder="E-mailadres invoeren" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>E-mailadres bevestigen</label>
                  <input type="email" placeholder="E-mailadres bevestigen" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
                  Bericht <span style={{ color: '#e33' }}>*</span>
                </label>
                <textarea required rows={6} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" style={{
                background: '#2a9e26', color: '#fff', border: 'none',
                padding: '14px 28px', borderRadius: 4, fontWeight: 700,
                fontSize: 14, cursor: 'pointer', fontFamily: 'Montserrat, Arial, sans-serif',
                alignSelf: 'flex-start'
              }}>
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '100px 24px', textAlign: 'center'
      }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>GA EROP UIT</p>
        <h2 style={{ color: '#fff', fontSize: 42, fontFamily: 'Montserrat, Arial, sans-serif', marginBottom: 24, lineHeight: 1.3 }}>
          Ontdek Almere vanaf het water<br />met een sloep
        </h2>
        <a href={YETTI_BOOK} style={{
          display: 'inline-block', background: 'transparent', border: '2px solid #fff',
          color: '#fff', padding: '12px 24px', borderRadius: 4,
          textDecoration: 'none', fontWeight: 700, fontSize: 13
        }}>
          RESERVEREN
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

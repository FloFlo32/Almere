'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

export default function RoutesPage() {
  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: 40, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Vaarroutes
          </h1>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Almere kent veel mooie plekken en vanaf het water zul je spontaan verliefd worden op de jongste stad van Nederland.
            Je hebt verschillende mogelijkheden om te varen met onze sloepen, waar je onder andere een aantal sluisjes tegenkomt
            die je zelf moet bedienen. De ultieme nautische ervaring beleef je met ons!
          </p>

          <h2 style={{ fontSize: 20, color: '#2a9e26', fontWeight: 700, marginBottom: 32, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Start: De Kapitein Almere (Noorderplassen West) Boelijn 70
          </h2>

          {/* Route 1 */}
          <div className="route-block" style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Route 1</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
              <div>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
                  Vanuit de Noorderplassen vaar je langs mooie huizen aan het water richting het Beatrixpark, waar je een zelfbedieningssluis tegenkomt.
                  Het Beatrixpark is een van de stadsparken en heeft een sprookjesachtige setting, met grote bomen en een bijzondere poort midden op het water.
                  In het park kun je de boot even afmeren aan de lange zijde als je wilt. De vaarweg neemt je zelf mee langs het Den Uijpark, waar je zo het
                  centrum van de stad binnen vaart. Via de Olisgracht kom je op het Weerwater.
                </p>
                <p style={{ color: '#2a9e26', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>
                  Het Meerwwater dankt haar naam aan de vroegere Zuiderzee, na de drooglegging van de polder is er voor de aanleg van de eerste woontwijken
                  in Almere veel zand opgegraven waardoor er een meer ontstond. Omdat het dus water was ontstaan, kreeg het die naam.
                </p>
                <p style={{ color: '#666', lineHeight: 1.8 }}>
                  Vanaf het Weerwater kun je de skyline van Almere goed zien. Almere kent veel moderne architectuur en er zijn in Almere Centrum
                  verschillende prijswinnende gebouwen te vinden. In tegenstelling tot de route 1 vaar je niet rechtdoor het Weerwater over, maar via het
                  centrum en kom je via een smalle vaarweg op de Leeghatersplassen terecht. Hier kun je kiezen voor de ene of andere kant en linksomde hoek.
                  Hierna vlaat je over de Noorderplassen weer terug naar de steiger.
                </p>
              </div>
              <div style={{ background: '#f0f0f0', borderRadius: 8, minHeight: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#aaa', fontSize: 14 }}>Routekaart Route 1</p>
              </div>
            </div>
          </div>

          {/* Route 2 & 3 */}
          <div className="route-block" style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Route 2 &amp; 3</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
              <div>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
                  Vanuit de Noorderplassen vaar je langs mooie huizen aan het water richting het Beatrixpark, waar je een zelfbedieningssluis tegenkomt.
                  Het Beatrixpark is een van de stadsparken en heeft een sprookjesachtige setting, met grote bomen en een bijzondere poort midden op het water.
                  In het park kun je de boot even afmeren aan de lange zijde als je wilt. De vaarweg neemt je zelf mee langs het Den Uijpark, waar je zo het
                  centrum van de stad binnen vaart. Via de Olisgracht kom je op het Weerwater.
                </p>
                <p style={{ color: '#2a9e26', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>
                  Het Meerwater dankt haar naam aan de vroegere Zuiderzee, na de drooglegging van de polder is er voor de aanleg van de eerste woontwijken
                  in Almere veel zand opgegraven waardoor er een meer ontstond. Omdat het dus meer water was ontstaan, kreeg het die naam.
                </p>
                <p style={{ color: '#666', lineHeight: 1.8 }}>
                  Vanaf het Weerwater kun je de skyline van Almere goed zien. Almere kent veel moderne architectuur en er zijn in Almere Centrum
                  verschillende prijswinnende gebouwen te vinden. In tegenstelling tot route 1 vaar je niet rechtdoor het Weerwater over, maar via het
                  centrum en kom je via een smalle vaarweg op de Leeghatersplassen terecht. Hier kun je kiezen om rechtdoor te varen of linksomde hoek
                  te varen of via de vaarweg naar de Noorderplassen te varen.
                </p>
              </div>
              <div style={{ background: '#f0f0f0', borderRadius: 8, minHeight: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#aaa', fontSize: 14 }}>Routekaart Route 2 &amp; 3</p>
              </div>
            </div>
          </div>

          {/* Route 4 */}
          <div className="route-block" style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Route 4</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
              <div>
                <p style={{ color: '#666', lineHeight: 1.8 }}>
                  Blijf lekker op de Noorderplassen en vaar naar een van de eilandjes. Leg de boot aan de steiger en geniet van de omgeving. Vaar tussen de
                  huizen door die aan het water liggen en verken de Noorderplassen. Leg de boot aan een steiger en geniet van het lekvare water, neem een
                  duik en koel af op een warme zomerdag.
                </p>
              </div>
              <div style={{ background: '#f0f0f0', borderRadius: 8, minHeight: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#aaa', fontSize: 14 }}>Routekaart Route 4</p>
              </div>
            </div>
          </div>

          {/* Sluizen */}
          <div style={{ borderTop: '1px solid #eee', paddingTop: 40 }}>
            <h3 style={{ fontSize: 22, marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Bedienen van sluizen</h3>
            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: 20 }}>
              Er zijn meerdere zelfbedieningssluizen die je kunt tegenkomen als je een rondje door Almere vaart. Een korte tutorial over hoe je ze moet gebruiken:
            </p>
            <ul style={{ color: '#666', lineHeight: 2, paddingLeft: 24 }}>
              <li>Als je aan komt varen zie je eerst naar de lichten: staat op groen/rood dan druk je op de groene/rode knop;</li>
              <li>Als je de sluisdeuren open gaan, wacht tot het licht groen is om de sluis in te varen;</li>
              <li>Als je in de sluis ligt, druk in de sluis op de zwarte knop zodat de deuren sluiten;</li>
              <li>Wacht tot de deuren voor je open gaan en het licht groen is;</li>
              <li>Je kunt verder varen.</li>
            </ul>
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

'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

const boats = [
  {
    title: 'Sloep tot 8 personen',
    desc: '100% elektrisch varen, stil en duurzaam. Snelheid: 7 km/h.',
    img: '/images/strand22-card.jpg',
    tarieven: [
      { label: 'Ochtend (9:30–12:30)', price: '€ 115,-' },
      { label: 'Middag (12:30–17:30)', price: '€ 160,-' },
      { label: 'Avond (18:30–21:00)', price: '€ 115,-' },
      { label: 'Halve dag (9:30–17:30)', price: '€ 195,-' },
      { label: 'Dag lang (9:30–21:00)', price: '€ 235,-' },
    ],
    locatie: 'Restaurant De Kapitein, Strand 22 en Loetje Noorderplassen',
  },
  {
    title: 'Sloep tot 12 personen',
    desc: '100% elektrisch varen, stil en duurzaam. Snelheid: 7 km/h.',
    img: '/images/loetje-card.jpg',
    tarieven: [
      { label: 'Ochtend (9:30–12:30)', price: '€ 162,-' },
      { label: 'Middag (12:30–17:30)', price: '€ 222,-' },
      { label: 'Avond (18:30–21:00)', price: '€ 162,-' },
      { label: 'Halve dag (9:30–17:30)', price: '€ 275,-' },
      { label: 'Dag lang (9:30–21:00)', price: '€ 335,-' },
    ],
    locatie: 'Strand 22 (Almere Centrum)',
    note: 'De sloepen zijn 100% elektrisch en we...',
  },
  {
    title: 'Sloep tot 8 personen',
    desc: 'Sloep met buitenboordmotor. Snelheid: 9 km/h.',
    img: '/images/strand22-card.jpg',
    tarieven: [
      { label: 'Ochtend (9:30–12:30)', price: '€ 120,-' },
      { label: 'Middag (12:30–17:30)', price: '€ 165,-' },
      { label: 'Avond (18:30–21:00)', price: '€ 120,-' },
      { label: 'Halve dag (9:30–17:30)', price: '€ 210,-' },
      { label: 'Dag lang (9:30–21:00)', price: '€ 250,-' },
    ],
    locatie: 'Restaurant De Kapitein (Noorderplassen)',
    note: 'De sloepen zijn motorisch aangedreven.',
  },
  {
    title: 'Sloep tot 12 personen',
    desc: 'Sloep met buitenboordmotor. Snelheid: 9 km/h.',
    img: '/images/loetje-card.jpg',
    tarieven: [
      { label: 'Ochtend (8:30–12:30)', price: '€ 150,-' },
      { label: 'Middag (12:30–17:30)', price: '€ 220,-' },
      { label: 'Avond (18:30–21:00)', price: '€ 150,-' },
      { label: 'Halve dag (9:30–17:30)', price: '€ 275,-' },
      { label: 'Dag lang (9:30–21:00)', price: '€ 325,-' },
    ],
    locatie: 'Restaurant De Kapitein (Noorderplassen)',
    note: 'De sloepen zijn motorisch aangedreven en we vragen bij aanvang een geldig legitimatiebewijs achter te laten als borg. Deze sloepen zijn zonder vaarbewijs te varen.',
  },
  {
    title: 'BBQ op een sloep',
    desc: 'Geniet van een heerlijke BBQ op een elektrische sloep.',
    img: '/images/bbq.jpg',
    tarieven: [
      { label: '€37,50 per persoon inclusief eten en drinken.', price: '' },
    ],
    locatie: 'Restaurant De Kapitein (Noorderplassen)',
    note: 'Het BBQ arrangement is eenvoudig te boeken via ons boekingssysteem. Voor meer informatie, klik op de knop hieronder.',
  },
]

export default function TarievenPage() {
  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: 40, marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Onze tarieven
          </h1>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 800, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Sloepverhuur Almere heeft twee verschillende soorten sloepen. We hebben 100% elektrische sloepen geschikt tot 8 personen en sloepen met een
            buitenboordmotor geschikt tot 12 personen. Onze elektrische sloepen bevatten de nieuwste technieken en zijn geluidloos. De 12 persoons sloepen zijn
            voorzien van een brandstofmotor met de allervnieuwste milieu-eisen en zijn zeer zuinig. Al met al zijn onze sloepen de uitstekende keuze voor een dagje
            uit op de Almeerse wateren.
          </p>

          {/* Slecht weer garantie */}
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '32px 40px', marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>Slecht weer garantie</h2>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              In het geval van slecht weer (regen en/of onweer) op het moment dat jullie een sloep geboekt hebben, is het mogelijk een andere datum te kiezen om
              te gaan varen. Zoals in onze voorwaarden beschreven is het niet mogelijk om in het geval van slecht weer te annuleren, het is alleen mogelijk om via de
              mail of telefonisch te verplaatsen.
            </p>
          </div>

          {/* Boat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }}>
            {boats.slice(0, 3).map((boat, i) => (
              <BoatCard key={i} boat={boat} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 400px))', gap: 24, justifyContent: 'center', marginBottom: 60 }}>
            {boats.slice(3).map((boat, i) => (
              <BoatCard key={i} boat={boat} />
            ))}
          </div>

          {/* Horeca */}
          <h2 style={{ fontSize: 32, textAlign: 'center', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Horeca</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Ga je het water op en wil je voor of na het varen op het terras op het water zitten? Check dan de openingstijden en beschikbaarheid bij de horecagelegenheid waar je in de buurt huurt.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { name: 'De Kapitein (Noorderplassen)', img: '/images/loetje-card.jpg' },
              { name: 'Strand 22 (Almere Centrum)', img: '/images/strand22-card.jpg' },
            ].map(loc => (
              <div key={loc.name} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #eee' }}>
                <img src={loc.img} alt={loc.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 16, color: '#2a9e26', fontFamily: 'Montserrat, Arial, sans-serif' }}>{loc.name}</h3>
                  <a href="#" style={{
                    background: '#2a9e26', color: '#fff', padding: '8px 16px',
                    borderRadius: 4, textDecoration: 'none', fontSize: 13, fontWeight: 700
                  }}>Bekijk website</a>
                </div>
              </div>
            ))}
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

function BoatCard({ boat }: { boat: typeof boats[0] }) {
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <img src={boat.img} alt={boat.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>{boat.title}</h3>
        <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>{boat.desc}</p>
        <p style={{ color: '#2a9e26', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>Tarieven</p>
        {boat.tarieven.map((t, i) => (
          <p key={i} style={{ color: '#555', fontSize: 13, lineHeight: 1.8 }}>
            {t.label}{t.price ? ` ${t.price}` : ''}
          </p>
        ))}
        <p style={{ color: '#2a9e26', fontWeight: 700, fontSize: 13, marginTop: 16, marginBottom: 4 }}>Locatie</p>
        <p style={{ color: '#555', fontSize: 13, marginBottom: 8 }}>{boat.locatie}</p>
        {boat.note && <p style={{ color: '#888', fontSize: 12, marginBottom: 16, lineHeight: 1.6 }}>{boat.note}</p>}
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <a href="https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn" style={{
            display: 'block', textAlign: 'center', background: '#2a9e26', color: '#fff',
            padding: '12px', borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 13
          }}>
            Boek nu
          </a>
        </div>
      </div>
    </div>
  )
}

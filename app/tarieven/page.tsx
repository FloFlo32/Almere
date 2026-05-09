'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useLang } from '../../lib/LanguageContext'
import { pageTranslations } from '../../lib/pageTranslations'

const BOOK_LOETJE   = 'https://almere.vercel.app/?yetti-rental=true&location=631aa7fb-90ae-4a7a-acce-d2d38f516b83'
const BOOK_STRAND22 = 'https://almere.vercel.app/?yetti-rental=true&location=7a20a773-3a07-4fd8-96f1-607d93035975'
const YETTI_BOOK = BOOK_LOETJE

const boats = [
  {
    titleNl: 'Sloep tot 8 personen', titleEn: 'Sloop up to 8 people', titleDe: 'Sloep bis 8 Personen',
    descNl: '100% elektrisch varen, stil en duurzaam. Snelheid: 7 km/h.',
    descEn: '100% electric, silent and sustainable. Speed: 7 km/h.',
    descDe: '100% elektrisch, still und nachhaltig. Geschwindigkeit: 7 km/h.',
    img: '/images/sloep-electric.jpg',
    tarieven: [
      { labelNl: 'Ochtend (9:30–12:30)', labelEn: 'Morning (9:30–12:30)', labelDe: 'Morgens (9:30–12:30)', price: '€ 115,-' },
      { labelNl: 'Middag (12:30–17:30)', labelEn: 'Afternoon (12:30–17:30)', labelDe: 'Nachmittags (12:30–17:30)', price: '€ 160,-' },
      { labelNl: 'Avond (18:30–21:00)', labelEn: 'Evening (18:30–21:00)', labelDe: 'Abends (18:30–21:00)', price: '€ 115,-' },
      { labelNl: 'Halve dag (9:30–17:30)', labelEn: 'Half day (9:30–17:30)', labelDe: 'Halber Tag (9:30–17:30)', price: '€ 195,-' },
      { labelNl: 'Dag lang (9:30–21:00)', labelEn: 'Full day (9:30–21:00)', labelDe: 'Ganzer Tag (9:30–21:00)', price: '€ 235,-' },
    ],
    locatieNl: 'Strand 22 en Loetje Noorderplassen',
    locatieEn: 'Strand 22 and Loetje Noorderplassen',
    locatieDe: 'Strand 22 und Loetje Noorderplassen',
  },
  {
    titleNl: 'Sloep tot 12 personen', titleEn: 'Sloop up to 12 people', titleDe: 'Sloep bis 12 Personen',
    descNl: '100% elektrisch varen, stil en duurzaam. Snelheid: 7 km/h.',
    descEn: '100% electric, silent and sustainable. Speed: 7 km/h.',
    descDe: '100% elektrisch, still und nachhaltig. Geschwindigkeit: 7 km/h.',
    img: '/images/sloep-water.jpg',
    tarieven: [
      { labelNl: 'Ochtend (9:30–12:30)', labelEn: 'Morning (9:30–12:30)', labelDe: 'Morgens (9:30–12:30)', price: '€ 162,-' },
      { labelNl: 'Middag (12:30–17:30)', labelEn: 'Afternoon (12:30–17:30)', labelDe: 'Nachmittags (12:30–17:30)', price: '€ 222,-' },
      { labelNl: 'Avond (18:30–21:00)', labelEn: 'Evening (18:30–21:00)', labelDe: 'Abends (18:30–21:00)', price: '€ 162,-' },
      { labelNl: 'Halve dag (9:30–17:30)', labelEn: 'Half day (9:30–17:30)', labelDe: 'Halber Tag (9:30–17:30)', price: '€ 275,-' },
      { labelNl: 'Dag lang (9:30–21:00)', labelEn: 'Full day (9:30–21:00)', labelDe: 'Ganzer Tag (9:30–21:00)', price: '€ 335,-' },
    ],
    locatieNl: 'Strand 22 en Loetje Noorderplassen',
    locatieEn: 'Strand 22 and Loetje Noorderplassen',
    locatieDe: 'Strand 22 und Loetje Noorderplassen',
  },
  {
    titleNl: 'Sloep tot 8 personen', titleEn: 'Sloop up to 8 people', titleDe: 'Sloep bis 8 Personen',
    descNl: 'Sloep met buitenboordmotor. Snelheid: 9 km/h.',
    descEn: 'Sloop with outboard motor. Speed: 9 km/h.',
    descDe: 'Sloep mit Außenbordmotor. Geschwindigkeit: 9 km/h.',
    img: '/images/motorsloep.jpg',
    tarieven: [
      { labelNl: 'Ochtend (9:30–12:30)', labelEn: 'Morning (9:30–12:30)', labelDe: 'Morgens (9:30–12:30)', price: '€ 120,-' },
      { labelNl: 'Middag (12:30–17:30)', labelEn: 'Afternoon (12:30–17:30)', labelDe: 'Nachmittags (12:30–17:30)', price: '€ 165,-' },
      { labelNl: 'Avond (18:30–21:00)', labelEn: 'Evening (18:30–21:00)', labelDe: 'Abends (18:30–21:00)', price: '€ 120,-' },
      { labelNl: 'Halve dag (9:30–17:30)', labelEn: 'Half day (9:30–17:30)', labelDe: 'Halber Tag (9:30–17:30)', price: '€ 210,-' },
      { labelNl: 'Dag lang (9:30–21:00)', labelEn: 'Full day (9:30–21:00)', labelDe: 'Ganzer Tag (9:30–21:00)', price: '€ 250,-' },
    ],
    locatieNl: 'Strand 22 en Loetje Noorderplassen',
    locatieEn: 'Strand 22 and Loetje Noorderplassen',
    locatieDe: 'Strand 22 und Loetje Noorderplassen',
    noteNl: 'De sloepen zijn motorisch aangedreven.',
    noteEn: 'These sloops are motor-driven.',
    noteDe: 'Diese Sloepen sind motorangetrieben.',
  },
  {
    titleNl: 'Sloep tot 12 personen', titleEn: 'Sloop up to 12 people', titleDe: 'Sloep bis 12 Personen',
    descNl: 'Sloep met buitenboordmotor. Snelheid: 9 km/h.',
    descEn: 'Sloop with outboard motor. Speed: 9 km/h.',
    descDe: 'Sloep mit Außenbordmotor. Geschwindigkeit: 9 km/h.',
    img: '/images/sloep-large.jpg',
    tarieven: [
      { labelNl: 'Ochtend (8:30–12:30)', labelEn: 'Morning (8:30–12:30)', labelDe: 'Morgens (8:30–12:30)', price: '€ 150,-' },
      { labelNl: 'Middag (12:30–17:30)', labelEn: 'Afternoon (12:30–17:30)', labelDe: 'Nachmittags (12:30–17:30)', price: '€ 220,-' },
      { labelNl: 'Avond (18:30–21:00)', labelEn: 'Evening (18:30–21:00)', labelDe: 'Abends (18:30–21:00)', price: '€ 150,-' },
      { labelNl: 'Halve dag (9:30–17:30)', labelEn: 'Half day (9:30–17:30)', labelDe: 'Halber Tag (9:30–17:30)', price: '€ 275,-' },
      { labelNl: 'Dag lang (9:30–21:00)', labelEn: 'Full day (9:30–21:00)', labelDe: 'Ganzer Tag (9:30–21:00)', price: '€ 325,-' },
    ],
    locatieNl: 'Strand 22 en Loetje Noorderplassen',
    locatieEn: 'Strand 22 and Loetje Noorderplassen',
    locatieDe: 'Strand 22 und Loetje Noorderplassen',
    noteNl: 'Motorisch aangedreven. Geldig legitimatiebewijs vereist als borg. Geen vaarbewijs nodig.',
    noteEn: 'Motor-driven. Valid ID required as deposit. No boating licence needed.',
    noteDe: 'Motorangetrieben. Gültiger Ausweis als Pfand erforderlich. Kein Bootsführerschein nötig.',
  },
  {
    titleNl: 'BBQ op een sloep', titleEn: 'BBQ on a sloop', titleDe: 'Grillen auf dem Sloep',
    descNl: 'Geniet van een heerlijke BBQ op een elektrische sloep.',
    descEn: 'Enjoy a delicious BBQ on an electric sloop.',
    descDe: 'Genießen Sie ein köstliches BBQ auf einem elektrischen Sloep.',
    img: '/images/bbq.jpg',
    tarieven: [
      { labelNl: '€37,50 per persoon inclusief eten en drinken', labelEn: '€37.50 per person including food and drinks', labelDe: '€37,50 pro Person inkl. Essen und Getränke', price: '' },
    ],
    locatieNl: 'Strand 22 en Loetje Noorderplassen',
    locatieEn: 'Strand 22 and Loetje Noorderplassen',
    locatieDe: 'Strand 22 und Loetje Noorderplassen',
    noteNl: 'Eenvoudig te boeken via ons boekingssysteem.',
    noteEn: 'Easily booked through our booking system.',
    noteDe: 'Einfach über unser Buchungssystem buchbar.',
  },
]

const horeca = [
  { name: 'De Kapitein (Noorderplassen)', img: '/images/de-kapitein-horeca.jpg' },
  { name: 'Strand 22 (Almere Centrum)', img: '/images/strand22-card.jpg' },
]

type Lang = 'nl' | 'en' | 'de'

export default function TarievenPage() {
  const { lang } = useLang()
  const p = pageTranslations[lang].tarieven
  const cta = pageTranslations[lang].cta

  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 className="page-title" style={{ marginBottom: 20 }}>
            {p.title}
          </h1>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 800, margin: '0 auto 48px', lineHeight: 1.7 }}>
            {p.intro}
          </p>

          <div className="info-box">
            <h2 style={{ fontSize: 24, marginBottom: 12, fontFamily: 'Montserrat, Arial, sans-serif', color: '#2a9e26' }}>{p.weatherTitle}</h2>
            <p style={{ color: '#666', lineHeight: 1.7 }}>{p.weatherText}</p>
          </div>

          <div className="boats-grid-3">
            {boats.slice(0, 3).map((boat, i) => (
              <BoatCard key={i} boat={boat} lang={lang as Lang} p={p} />
            ))}
          </div>
          <div className="boats-grid-2">
            {boats.slice(3).map((boat, i) => (
              <BoatCard key={i} boat={boat} lang={lang as Lang} p={p} />
            ))}
          </div>

          <h2 style={{ fontSize: 32, textAlign: 'center', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif', color: '#2a9e26' }}>{p.horecaTitle}</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 40px', lineHeight: 1.7 }}>{p.horecaText}</p>
          <div className="horeca-grid">
            {horeca.map(loc => (
              <div key={loc.name} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #eee' }}>
                <img src={loc.img} alt={loc.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div className="horeca-item-inner" style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: 16, color: '#2a9e26', fontFamily: 'Montserrat, Arial, sans-serif' }}>{loc.name}</h3>
                  <a href="#" style={{
                    background: '#2a9e26', color: '#fff', padding: '8px 16px',
                    borderRadius: 4, textDecoration: 'none', fontSize: 13, fontWeight: 700, flexShrink: 0
                  }}>{p.viewSite}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        }}>{cta.btn}</a>
      </section>

      <Footer />
    </>
  )
}

function BoatCard({ boat, lang, p }: { boat: typeof boats[0]; lang: Lang; p: Record<string, string> }) {
  const title = lang === 'nl' ? boat.titleNl : lang === 'en' ? boat.titleEn : boat.titleDe
  const desc = lang === 'nl' ? boat.descNl : lang === 'en' ? boat.descEn : boat.descDe
  const note = lang === 'nl' ? (boat as any).noteNl : lang === 'en' ? (boat as any).noteEn : (boat as any).noteDe
  const locatie = lang === 'nl' ? (boat as any).locatieNl : lang === 'en' ? (boat as any).locatieEn : (boat as any).locatieDe

  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <img src={boat.img} alt={title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>{title}</h3>
        <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>{desc}</p>
        <p style={{ color: '#2a9e26', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{p.rateLabel}</p>
        {boat.tarieven.map((t, i) => {
          const label = lang === 'nl' ? t.labelNl : lang === 'en' ? t.labelEn : t.labelDe
          return (
            <p key={i} style={{ color: '#555', fontSize: 13, lineHeight: 1.8 }}>
              {label}{t.price ? ` ${t.price}` : ''}
            </p>
          )
        })}
        <p style={{ color: '#2a9e26', fontWeight: 700, fontSize: 13, marginTop: 16, marginBottom: 4 }}>{p.locationLabel}</p>
        <p style={{ color: '#555', fontSize: 13, marginBottom: note ? 8 : 0 }}>{locatie}</p>
        {note && <p style={{ color: '#888', fontSize: 12, marginBottom: 16, lineHeight: 1.6 }}>{note}</p>}
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <a href={YETTI_BOOK} target="_blank" rel="noopener" style={{
            display: 'block', textAlign: 'center', background: '#2a9e26', color: '#fff',
            padding: '12px', borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 13
          }}>{p.bookBtn}</a>
        </div>
      </div>
    </div>
  )
}

'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useLang } from '../../lib/LanguageContext'
import { pageTranslations } from '../../lib/pageTranslations'

const YETTI_BOOK = 'https://almere.vercel.app/?yetti-rental=true&location=631aa7fb-90ae-4a7a-acce-d2d38f516b83'

const routeTexts = {
  nl: {
    r1p1: 'Vanuit de Noorderplassen vaar je langs mooie huizen aan het water richting het Beatrixpark, waar je een zelfbedieningssluis tegenkomt. Het Beatrixpark is een van de stadsparken en heeft een sprookjesachtige setting, met grote bomen en een bijzondere poort midden op het water. In het park kun je de boot even afmeren als je wilt. De vaarweg neemt je mee langs het Den Uijpark, waar je zo het centrum van de stad binnen vaart. Via de Olisgracht kom je op het Weerwater.',
    r1p2: 'Het Meerwater dankt haar naam aan de vroegere Zuiderzee, na de drooglegging van de polder is er voor de aanleg van de eerste woontwijken in Almere veel zand opgegraven waardoor er een meer ontstond. Omdat het dus meer water was ontstaan, kreeg het die naam.',
    r1p3: 'Vanaf het Weerwater kun je de skyline van Almere goed zien. Almere kent veel moderne architectuur en er zijn in Almere Centrum verschillende prijswinnende gebouwen te vinden. Hierna vlaat je over de Noorderplassen weer terug naar de steiger.',
    r23p1: 'Vanuit de Noorderplassen vaar je langs mooie huizen aan het water richting het Beatrixpark, waar je een zelfbedieningssluis tegenkomt. Het Beatrixpark heeft een sprookjesachtige setting, met grote bomen en een bijzondere poort midden op het water.',
    r23p2: 'Het Meerwater dankt haar naam aan de vroegere Zuiderzee, na de drooglegging is er veel zand opgegraven waardoor er een meer ontstond. Omdat het dus meer water was ontstaan, kreeg het die naam.',
    r23p3: 'In tegenstelling tot route 1 vaar je niet rechtdoor het Weerwater over, maar via het centrum en kom je via een smalle vaarweg op de Leeghatersplassen terecht. Hier kun je kiezen om rechtdoor te varen of linksomde hoek te varen of via de vaarweg naar de Noorderplassen te varen.',
  },
  en: {
    r1p1: 'From the Noorderplassen you sail past beautiful waterfront houses towards Beatrixpark, where you encounter a self-operated lock. Beatrixpark is one of the city parks with a fairytale setting, large trees and a unique gate in the middle of the water. You can moor your boat in the park. The waterway takes you past Den Uijpark, sailing right into the city centre. Via the Olisgracht you reach the Weerwater.',
    r1p2: 'The Weerwater takes its name from the former Zuiderzee. After the polder was drained, a lot of sand was excavated for the construction of the first residential areas in Almere, creating a lake. Because so much water had formed, it got that name.',
    r1p3: 'From the Weerwater you have a great view of the Almere skyline. Almere has many award-winning modern buildings in its city centre. From there you sail back across the Noorderplassen to the jetty.',
    r23p1: 'From the Noorderplassen you sail past beautiful waterfront houses towards Beatrixpark, where you encounter a self-operated lock. Beatrixpark has a fairytale setting with large trees and a unique gate in the middle of the water.',
    r23p2: 'The Weerwater takes its name from the former Zuiderzee. After the polder was drained, a lot of sand was excavated, creating a lake — hence its name.',
    r23p3: 'Unlike route 1, you don\'t sail straight across the Weerwater but through the city centre, reaching the Leeghatersplassen via a narrow waterway. There you can choose to continue straight, turn left, or take the waterway back to the Noorderplassen.',
  },
  de: {
    r1p1: 'Von den Noorderplassen fahren Sie an schönen Häusern am Wasser vorbei Richtung Beatrixpark, wo Sie eine selbst zu bedienende Schleuse antreffen. Der Beatrixpark ist einer der Stadtparks mit einem märchenhaften Ambiente, großen Bäumen und einem einzigartigen Tor mitten auf dem Wasser. Im Park können Sie anlegen. Der Wasserweg führt Sie am Den Uijpark vorbei direkt ins Stadtzentrum. Über den Olisgracht erreichen Sie das Weerwater.',
    r1p2: 'Das Weerwater verdankt seinen Namen der früheren Zuiderzee. Nach der Trockenlegung des Polders wurde viel Sand für die ersten Wohnviertel abgebaut und es entstand ein See — daher der Name.',
    r1p3: 'Vom Weerwater aus haben Sie einen schönen Blick auf die Skyline von Almere. Almere hat viele preisgekrönte moderne Gebäude im Stadtzentrum. Anschließend fahren Sie über die Noorderplassen zurück zum Steg.',
    r23p1: 'Von den Noorderplassen fahren Sie an schönen Häusern am Wasser vorbei zum Beatrixpark, wo Sie eine selbstbediente Schleuse antreffen. Der Beatrixpark hat ein märchenhaftes Ambiente mit großen Bäumen und einem besonderen Tor mitten auf dem Wasser.',
    r23p2: 'Das Weerwater verdankt seinen Namen der früheren Zuiderzee. Nach der Trockenlegung wurde viel Sand abgebaut, es entstand ein See — daher der Name.',
    r23p3: 'Im Gegensatz zu Route 1 fahren Sie nicht geradeaus über das Weerwater, sondern durch das Stadtzentrum und gelangen über einen schmalen Wasserweg zu den Leeghatersplassen. Dort können Sie geradeaus weiterfahren, links abbiegen oder den Wasserweg zurück zu den Noorderplassen nehmen.',
  },
}

export default function RoutesPage() {
  const { lang } = useLang()
  const p = pageTranslations[lang].routes
  const cta = pageTranslations[lang].cta
  const rt = routeTexts[lang]

  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 className="page-title" style={{ marginBottom: 20 }}>
            {p.title}
          </h1>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.7 }}>
            {p.intro}
          </p>

          <h2 style={{ fontSize: 18, color: '#2a9e26', fontWeight: 700, marginBottom: 40, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            {p.startLabel}
          </h2>

          {/* Route 1 */}
          <RouteBlock title={p.route1Title} mapLabel={p.mapLabel} num={1}>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{rt.r1p1}</p>
            <p style={{ color: '#2a9e26', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>{rt.r1p2}</p>
            <p style={{ color: '#666', lineHeight: 1.8 }}>{rt.r1p3}</p>
          </RouteBlock>

          {/* Route 2 & 3 */}
          <RouteBlock title={p.route23Title} mapLabel={p.mapLabel} num={23}>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>{rt.r23p1}</p>
            <p style={{ color: '#2a9e26', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>{rt.r23p2}</p>
            <p style={{ color: '#666', lineHeight: 1.8 }}>{rt.r23p3}</p>
          </RouteBlock>

          {/* Route 4 */}
          <div style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{p.route4Title}</h3>
            <div className="route-block-grid">
              <p style={{ color: '#666', lineHeight: 1.8 }}>{p.route4Text}</p>
              <img src="/images/route-map.png" alt={p.mapLabel} style={{ width: '100%', borderRadius: 8 }} />
            </div>
          </div>

          {/* Sluizen */}
          <div style={{ borderTop: '1px solid #eee', paddingTop: 40 }}>
            <h3 style={{ fontSize: 22, marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif', color: '#2a9e26' }}>{p.sluizenTitle}</h3>
            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: 20 }}>{p.sluizenIntro}</p>
            <ul style={{ color: '#666', lineHeight: 2, paddingLeft: 24 }}>
              <li>{p.sluis1}</li>
              <li>{p.sluis2}</li>
              <li>{p.sluis3}</li>
              <li>{p.sluis4}</li>
              <li>{p.sluis5}</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner cta={cta} href={YETTI_BOOK} />
      <Footer />
    </>
  )
}

function RouteBlock({ title, mapLabel, num, children }: { title: string; mapLabel: string; num: number; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 60 }}>
      <h3 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>{title}</h3>
      <div className="route-block-grid">
        <div>{children}</div>
        <img src="/images/route-map.png" alt={`${mapLabel} ${num}`} style={{ width: '100%', borderRadius: 8 }} />
      </div>
    </div>
  )
}

function CtaBanner({ cta, href }: { cta: Record<string, string>; href: string }) {
  return (
    <section className="cta-banner" style={{
      backgroundImage: 'linear-gradient(rgba(0,7,21,0.5), rgba(0,1,2,0.6)), url(/images/hero-cta.jpg)',
    }}>
      <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>{cta.tagline}</p>
      <h2 className="cta-banner-title">
        {cta.title}
      </h2>
      <a href={href} style={{
        display: 'inline-block', background: 'transparent', border: '2px solid #fff',
        color: '#fff', padding: '12px 24px', borderRadius: 4,
        textDecoration: 'none', fontWeight: 700, fontSize: 13
      }}>
        {cta.btn}
      </a>
    </section>
  )
}

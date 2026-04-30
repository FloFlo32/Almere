import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingModule from '../components/BookingModule'

export default function Home() {
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
          <p style={{ color: '#fff', fontSize: 18, marginBottom: 12 }}>Het leukste uitje op het water in Almere</p>
          <h1 style={{ color: '#fff', fontSize: 46, fontFamily: 'Mansalva, serif', lineHeight: 1.3, marginBottom: 24 }}>
            Ontdek Almere vanaf het water met een sloep
          </h1>
          <p style={{ color: '#fff', marginBottom: 32 }}>
            Kies je gewenste opstapplaats bij de Kapitein Almere, Strand 22 in Almere Stad of restaurant Loetje aan de Noorderplassen.
          </p>
          <a href="/boeken" style={{
            display: 'inline-block', background: 'transparent', border: '2px solid #fff',
            color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
            fontWeight: 700, marginBottom: 16, fontSize: 14
          }}>
            SLOEP RESERVEREN OPSTAPPLAATS LOETJE NOORDERPLASSEN →
          </a>
          <a href="/boeken" style={{
            display: 'inline-block', background: 'transparent', border: '2px solid #fff',
            color: '#fff', padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
            fontWeight: 700, fontSize: 14
          }}>
            SLOEP RESERVEREN OPSTAPPLAATS STRAND 22 (ALMERE STAD) →
          </a>
        </div>
      </section>

      {/* BOOKING MODULE - YETTI */}
      <section style={{ background: '#f0f8f0', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 8, color: '#333' }}>Reserveer een sloep</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 40 }}>
            Kies je datum, tijdstip en opstapplaats — direct online boeken via Yetti
          </p>
          <BookingModule />
        </div>
      </section>

      {/* LOCATIONS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 40, marginBottom: 16 }}>Onze locaties in Almere</h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: 700, margin: '0 auto 60px' }}>
            Onze sloepen zijn gloednieuw, duurzaam en milieuvriendelijk. Kies je gewenste opstapplaats en geniet op het water van Almere.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                name: 'De Kapitein (Noorderplassen)',
                img: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2022/08/snippet_dekapiteinalmere_featuredimage_facebook_2021.jpg',
                desc: 'Stap op de boot bij Restaurant de Kapitein aan de Noorderplassen. Met een bushalte en ruime parkeerplaats om de hoek is dit een prettige opstapplaats.'
              },
              {
                name: 'Restaurant Loetje (Noorderplassen)',
                img: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/06/D20230111LOE-MT-SK-2822-1024x576-1.jpg',
                desc: 'Stap aan boord bij Restaurant Loetje aan de Noorderplassen. Reserveer gemakkelijk jouw sloep via ons boekingssysteem.'
              },
              {
                name: 'Strand 22 (Almere Stad)',
                img: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/06/HJBE220612550-1024x683-2.jpg',
                desc: 'Opstappen direct vanuit Almere Stad? Ook dat is mogelijk. Via de Esplanade Steiger bij Strand 22 vaar je zo het Weerwater op.'
              }
            ].map(loc => (
              <div key={loc.name} style={{
                border: '2px solid #2a9e26', borderRadius: 8, overflow: 'hidden',
                boxShadow: '0 4px 25px rgba(0,0,0,0.07)', background: '#fff'
              }}>
                <img src={loc.img} alt={loc.name} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#555', marginBottom: 12 }}>{loc.name}</h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{loc.desc}</p>
                  <a href="/boeken" style={{
                    display: 'block', textAlign: 'center', background: '#2a9e26', color: '#fff',
                    padding: '12px', borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 13
                  }}>
                    RESERVEER EEN SLOEP
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
          {[
            { num: '24', label: 'Sloepen' },
            { num: '4', label: 'Routes' },
            { num: '800', label: 'Bruggen in Almere', sub: '(Meer dan in Venetië!)' },
            { num: '5', label: 'Meter onder de zeespiegel' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 80, fontWeight: 700, color: '#333', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: '#2a9e26', fontWeight: 700, fontSize: 16, marginTop: 8 }}>{s.label}</div>
              {s.sub && <div style={{ color: '#2a9e26', fontSize: 14 }}>{s.sub}</div>}
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
        <h2 style={{ color: '#fff', fontSize: 48, marginBottom: 40 }}>
          Geniet van al het moois dat Almere<br />heeft te bieden, vanaf het water.
        </h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/boeken" style={{
            background: '#fff', color: '#333', padding: '16px 32px', borderRadius: 4,
            textDecoration: 'none', fontWeight: 700, fontSize: 15
          }}>BOEK EEN SLOEP</a>
          <a href="/routes" style={{
            background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '16px 32px',
            borderRadius: 4, textDecoration: 'none', fontWeight: 700, fontSize: 15
          }}>BEKIJK DE ROUTES</a>
        </div>
      </section>

      {/* ABOUT SECTIONS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
          {[
            { title: 'Word kapitein voor een dag!', text: 'Word kapitein voor een dag! Kies een boot en zorg ervoor dat je jouw familie en vrienden de leukste plekjes van Almere leert kennen. Onze elektrische sloepen brengen je op plekken waar je normaal niet kunt komen.' },
            { title: 'De ultieme nautische ervaring', text: 'Almere kent vele mooie plekken en vanaf het water zul je spontaan verliefd worden op de jongste stad van Nederland. Je hebt verschillende mogelijkheden om te varen met onze sloepen.' },
            { title: 'BBQ op de boot', text: 'Zin om lekker te varen en op het water te genieten van een BBQ? Dat is zeker mogelijk! Kies voor een elektrische sloep bij locatie De Kapitein en boek er gemakkelijk een BBQ bij.' },
          ].map(s => (
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
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>Lees wat mensen vinden van Sloepverhuur Almere</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { name: 'H.J. Mooi', text: 'Voor de eerste keer een sloepje gehuurd in Almere! Zeer vriendelijke mensen prima boot, een heerlijke dag gehad!', stars: 5 },
              { name: 'Sabine Perotti', text: 'Wat was dit leuk! Online huren ging heel gemakkelijk en medewerkers bij De Kapitein heel vriendelijk. Korte uitleg vooraf en varen maar!', stars: 5 },
              { name: 'Marco de Rover', text: 'Zeker een aanrader. De sloep makkelijk te bedienen, is lekker ruim en comfortabel. Perfect voor een lekkere dag op het water.', stars: 5 },
            ].map(r => (
              <div key={r.name} style={{ background: '#fff', borderRadius: 8, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ color: '#fbbc04', fontSize: 18, marginBottom: 12 }}>{'★'.repeat(r.stars)}</div>
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
          <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 48 }}>Vermeldingen in de media</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { src: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/Nederlandse_Spoorwegen_logo.svg.png', alt: 'NS', label: 'Dagje uit in Almere via NS' },
              { src: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/311155141_540079848119239_2206287613562781740_n.jpg', alt: 'Visit Almere', label: 'Sloep varen via Visit Almere' },
              { src: 'https://www.sloepverhuuralmere.nl/wp-content/uploads/2023/11/vf-logo-website-1800x1200px.jpg', alt: 'Visit Flevoland', label: 'Varen via Visit Flevoland' },
            ].map(m => (
              <div key={m.alt} style={{ textAlign: 'center' }}>
                <img src={m.src} alt={m.alt} style={{ height: 50, objectFit: 'contain', display: 'block', margin: '0 auto 12px' }} />
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

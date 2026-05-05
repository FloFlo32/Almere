'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const YETTI_BOOK = 'https://yetti.ai/widget/wk_COgy_zxpukQRjKt04fEIGSEIo-PDJOzn'

export default function BootinstructiesPage() {
  return (
    <>
      <Navbar />

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          <h1 style={{ fontSize: 32, color: '#2a9e26', marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Welkom aan boord!
          </h1>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
            Welkom op het Almeerse water. Voor ons gaat er niets boven een dag op het water, je ontdekt een stad op een hele nieuwe manier en kunt optimaal
            genieten van je gezelschap. Almere ligt — op de dijken na — geheel onder zeeniveau (2 tot 5 meter) en we waren vroeger helemaal water. We hebben
            meer dan 800 bruggen in Almere — meer dan Venetië — en bestaan voor de helft uit water, een echte waterstad kun je dus wel zeggen! Sinds 1975 wordt
            er aan Almere gebouwd en in 2016 telde de stad 200.000 inwoners. Almere kent naast moderne architectuur ontzettend veel groen, wat je vanaf het
            water ontzettend goed kunt zien. Almere staat bekend om haar gescheiden wegen, zo hebben we een aparte busbaan, zijn autowegen gescheiden van
            fiets- en looppaden en kom je met de boot op plekken waar je anders niet kunt komen. Al varend zul je Almere van een totaal nieuwe kant leren
            kennen. We wensen jullie een fijne dag op het water!
          </p>

          {/* YouTube embed */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: 48, borderRadius: 8, overflow: 'hidden' }}>
            <iframe
              src="https://www.youtube.com/embed/placeholder"
              title="Bootinstructie video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>

          {/* Varen met onze sloepen */}
          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Varen met onze sloepen
          </h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
            Je hebt een boot bij ons gehuurd, super leuk! Om goed voorbereid te zijn, vragen we je onze instructie alvast te bekijken voor je gaat varen.
            We verhuren de boten in vaste tijdvakken, daarom vragen we met het gehele gezelschap 30 minuten voor aanvang aanwezig te zijn zodat jullie zo lang
            mogelijk kunnen genieten op het water. In deze 30 minuten worden jullie geholpen door een van onze collega's, krijgen jullie boot instructies en de
            routekaart uitgelegd. Jullie kunnen dan vanaf het aangegeven moment vertrekken. Zijn jullie te laat? Dan verandert de eindtijd niet, je moet de boot
            op tijd weer inleveren.
          </p>

          {/* Start */}
          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Start</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Een persoon van het gezelschap meldt zich bij onze medewerker, onder de naam van de reservering. Indien er kleine kinderen mee aan boord gaan,
            zijn de zwemvesten aanwezig, dit wil graag van tevoren aangeven i.v.m. maten.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
            De kapitein van de dag vragen wij deze instructievideo vast te bekijken. We nemen nog even de boot met je door voor jullie allemaal aan boord
            stappen. Indien er geen vragen zijn, mogen jullie lekker gaan varen!
          </p>

          {/* Varen */}
          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Varen</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Met lekker weer kan het ontzettend druk zijn op het water, bij de sluizen en in smalle grachten. Let hier goed op en houd een gematigde snelheid
            om vervelende ongelukken te voorkomen. Je kunt het beste van zo weinig gas geven en wachten, dan in volle snelheid ergens voorbij varen.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Kijk goed achter je! Om veilig te kunnen varen, moet je weten wat er om je heen gebeurd. Kijk regelmatig over je schouder of je niet wordt
            ingehaald door een snellere boot.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Zeilboten hebben voorrang op motorboten. Omdat zeilboten minder wendbaar zijn, geef jij deze voorrang. Dit geldt alleen als de zeilboot op zeil vaart,
            dus niet op de motor. Kano's en sups geef je voorrang, omdat jij wendbaarder bent dan zij.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Grote boten die beroepsvaart zijn, hebben voorrang in de sluizen. Zie je bijvoorbeeld een boot van GrooteSloep.nl of Almere Rondvaarten achter jou
            als jij de sluis in wilt varen? Dan moet jij deze boten voorrang geven.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Gebeurt er onderweg iets onverwachts waar je ons direct over wilt spreken? Heb je een aanvaring gehad met een andere boot of ben je ergens tegenaan
            gevaren? Is er iets kapot of stoot de boot er om voor nader reden mee? Bel dan direct met{' '}
            <a href="tel:+31683786325" style={{ color: '#2a9e26', fontWeight: 700 }}>+31683786325</a>.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
            Vergeet onderweg niet om foto's te maken en deze met je vrienden te delen! Als je ons wilt noemen op social media kan dat via @sloepverhuuralmere.
          </p>

          {/* Terugkomst */}
          <h2 style={{ fontSize: 22, color: '#2a9e26', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Terugkomst</h2>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Leg de boot weer op de plek waar je hem vandaan hebt gehaald hebt; een van onze medewerkers kan je helpen met het aanleggen als dit niet gaat.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
            Zorg dat je op tijd terug bent. Let erop dat je over het water veel langer onderweg bent dan over het land. Een kleine afstand in kilometers kan een
            lange tijd duren op een boot, je vergist je snel in de tijd. We verzoeken je om de sloep om 21:00 terug te brengen of voor zonsondergang.
          </p>
          <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 48 }}>
            Meld eventuele schade of mankementen bij een van onze medewerkers, als jullie al gebeld hebben van tevoren lopen we samen even door de situatie heen.
          </p>
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

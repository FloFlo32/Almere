import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookingModule from '../../components/BookingModule'

export default function BoekenPage() {
  return (
    <>
      <Navbar />
      <section style={{ padding: '60px 24px', background: '#f0f8f0', minHeight: '80vh' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: 40, marginBottom: 12 }}>Reserveer een sloep</h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 48 }}>Kies je datum, tijdstip en opstapplaats — direct online boeken</p>
          <BookingModule />
        </div>
      </section>
      <Footer />
    </>
  )
}

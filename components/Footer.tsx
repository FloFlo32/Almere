export default function Footer() {
  return (
    <footer style={{ background: '#f9f9f9', borderTop: '1px solid #eee', padding: '60px 24px 30px' }}>
      <div style={{ maxWidth: 1248, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
        <div>
          <img
            src="https://www.sloepverhuuralmere.nl/wp-content/uploads/2020/05/Logo_SloepverhuurAlmere_199x96.png"
            alt="Sloepverhuur Almere"
            style={{ height: 60, marginBottom: 16 }}
          />
          <p style={{ color: '#666', fontSize: 14 }}>Word kapitein voor een dag en ontdek Almere vanaf het water.</p>
          <p style={{ color: '#666', fontSize: 14, marginTop: 12 }}>Altijd geopend wanneer de zon schijnt.</p>
          <p style={{ color: '#666', fontSize: 14, marginTop: 8 }}>KVK: 75634139</p>
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>NAVIGATIE</h3>
          {['HOME', 'ROUTES', 'TARIEVEN', 'BOOTINSTRUCTIES', 'CONTACT', 'FAQ'].map(item => (
            <div key={item} style={{ marginBottom: 8 }}>
              <a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: 14 }}>{item}</a>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>LOCATIES</h3>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>De Kapitein (Noorderplassen)</p>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>Restaurant Loetje (Noorderplassen)</p>
          <p style={{ color: '#666', fontSize: 14 }}>Strand 22 (Almere Stad)</p>
        </div>
        <div>
          <h3 style={{ color: '#2a9e26', fontWeight: 700, marginBottom: 16, fontSize: 14 }}>CONTACT</h3>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>info@sloepverhuuralmere.nl</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            {['facebook', 'instagram', 'linkedin'].map(s => (
              <a key={s} href="#" style={{ color: '#2a9e26', fontSize: 18 }}>●</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1248, margin: '40px auto 0', borderTop: '1px solid #eee', paddingTop: 20, textAlign: 'center', color: '#999', fontSize: 13 }}>
        © {new Date().getFullYear()} Sloepverhuur Almere · Privacybeleid · Cookiebeleid
      </div>
    </footer>
  )
}

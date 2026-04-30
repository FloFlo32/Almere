'use client'
import { useState } from 'react'

const LOCATIONS = ['De Kapitein (Noorderplassen)', 'Restaurant Loetje (Noorderplassen)', 'Strand 22 (Almere Stad)']
const DURATIONS = ['2 uur', '3 uur', '4 uur', 'Hele dag']
const TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

export default function BookingModule() {
  const [step, setStep] = useState(1)
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [timeSlot, setTimeSlot] = useState('')
  const [guests, setGuests] = useState(2)
  const [confirmed, setConfirmed] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const priceMap: Record<string, number> = { '2 uur': 79, '3 uur': 109, '4 uur': 139, 'Hele dag': 189 }
  const price = duration ? priceMap[duration] : null

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e0e0e0',
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat, Arial, sans-serif',
    outline: 'none',
    cursor: 'pointer',
  }

  const btnStyle = (active: boolean) => ({
    padding: '10px 20px',
    border: active ? '2px solid #2a9e26' : '2px solid #e0e0e0',
    borderRadius: 6,
    background: active ? '#2a9e26' : '#fff',
    color: active ? '#fff' : '#333',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Montserrat, Arial, sans-serif',
    transition: 'all 0.2s',
  })

  if (confirmed) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 48, textAlign: 'center', maxWidth: 600, margin: '0 auto', boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontSize: 28, color: '#2a9e26', marginBottom: 12 }}>Boeking bevestigd!</h3>
        <p style={{ color: '#666', marginBottom: 24 }}>
          Je sloep is gereserveerd op <strong>{date}</strong> om <strong>{timeSlot}</strong> bij <strong>{location}</strong>.<br />
          Duur: {duration} · {guests} personen · €{price}
        </p>
        <p style={{ color: '#999', fontSize: 13, marginBottom: 32 }}>
          Een bevestigingsmail is verstuurd. Dit is een demo van het Yetti boekingssysteem.
        </p>
        <button onClick={() => { setStep(1); setConfirmed(false); setLocation(''); setDate(''); setDuration(''); setTimeSlot(''); setGuests(2); }}
          style={{ background: '#2a9e26', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
          Nieuwe boeking
        </button>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 30px rgba(0,0,0,0.08)', overflow: 'hidden', maxWidth: 900, margin: '0 auto' }}>
      {/* Progress bar */}
      <div style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
        {['Locatie & datum', 'Tijdstip & duur', 'Bevestigen'].map((label, i) => (
          <div key={label} style={{
            flex: 1, padding: '16px 24px', textAlign: 'center',
            background: step === i + 1 ? '#2a9e26' : step > i + 1 ? '#e8f5e8' : '#fff',
            color: step === i + 1 ? '#fff' : step > i + 1 ? '#2a9e26' : '#999',
            fontSize: 13, fontWeight: 700, borderRight: i < 2 ? '1px solid #f0f0f0' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: '50%',
              background: step === i + 1 ? 'rgba(255,255,255,0.3)' : step > i + 1 ? '#2a9e26' : '#e0e0e0',
              color: step > i + 1 ? '#fff' : 'inherit',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700
            }}>
              {step > i + 1 ? '✓' : i + 1}
            </span>
            {label}
          </div>
        ))}
      </div>

      <div style={{ padding: 40 }}>
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 32, color: '#333' }}>Kies je locatie en datum</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 13, color: '#555' }}>OPSTAPPLAATS</label>
                <select value={location} onChange={e => setLocation(e.target.value)} style={inputStyle}>
                  <option value="">Selecteer een locatie</option>
                  {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 13, color: '#555' }}>DATUM</label>
                <input type="date" value={date} min={today} onChange={e => setDate(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 13, color: '#555' }}>AANTAL PERSONEN</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #e0e0e0', background: '#fff', fontSize: 20, cursor: 'pointer', fontWeight: 700 }}>−</button>
                  <span style={{ fontSize: 22, fontWeight: 700, minWidth: 30, textAlign: 'center' }}>{guests}</span>
                  <button onClick={() => setGuests(Math.min(12, guests + 1))} style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #2a9e26', background: '#2a9e26', color: '#fff', fontSize: 20, cursor: 'pointer', fontWeight: 700 }}>+</button>
                  <span style={{ color: '#999', fontSize: 13 }}>max. 12 personen</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 32, textAlign: 'right' }}>
              <button disabled={!location || !date} onClick={() => setStep(2)}
                style={{ background: location && date ? '#2a9e26' : '#ccc', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: location && date ? 'pointer' : 'default' }}>
                Volgende stap →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 32, color: '#333' }}>Kies tijdstip en duur</h3>
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: 12, fontSize: 13, color: '#555' }}>STARTTIJDSTIP</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {TIME_SLOTS.map(t => (
                  <button key={t} onClick={() => setTimeSlot(t)} style={btnStyle(timeSlot === t)}>{t}</button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: 12, fontSize: 13, color: '#555' }}>DUUR</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {DURATIONS.map(d => (
                  <button key={d} onClick={() => setDuration(d)} style={{ ...btnStyle(duration === d), minWidth: 100 }}>
                    <div>{d}</div>
                    {<div style={{ fontSize: 12, fontWeight: 400, opacity: 0.8 }}>€{priceMap[d]}</div>}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(1)} style={{ background: '#f5f5f5', border: 'none', padding: '14px 24px', borderRadius: 6, fontSize: 14, cursor: 'pointer' }}>← Terug</button>
              <button disabled={!timeSlot || !duration} onClick={() => setStep(3)}
                style={{ background: timeSlot && duration ? '#2a9e26' : '#ccc', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: timeSlot && duration ? 'pointer' : 'default' }}>
                Volgende stap →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 32, color: '#333' }}>Bevestig je boeking</h3>
            <div style={{ background: '#f8f9fa', borderRadius: 8, padding: 28, marginBottom: 32 }}>
              <h4 style={{ color: '#2a9e26', marginBottom: 16, fontSize: 16 }}>Boekingsoverzicht</h4>
              {[
                { label: 'Locatie', value: location },
                { label: 'Datum', value: date },
                { label: 'Tijdstip', value: timeSlot },
                { label: 'Duur', value: duration },
                { label: 'Personen', value: `${guests} personen` },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                  <span style={{ color: '#666', fontSize: 14 }}>{label}</span>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{value}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 0', marginTop: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Totaal</span>
                <span style={{ fontWeight: 700, fontSize: 22, color: '#2a9e26' }}>€{price}</span>
              </div>
            </div>
            <div style={{ background: '#fff3cd', borderRadius: 6, padding: '12px 16px', marginBottom: 24, fontSize: 13, color: '#856404' }}>
              🔒 Dit is een <strong>Yetti demo boeking</strong>. In productie wordt hier betaald via Stripe Connect.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(2)} style={{ background: '#f5f5f5', border: 'none', padding: '14px 24px', borderRadius: 6, fontSize: 14, cursor: 'pointer' }}>← Terug</button>
              <button onClick={() => setConfirmed(true)}
                style={{ background: '#2a9e26', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                ✓ Bevestig boeking — €{price}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

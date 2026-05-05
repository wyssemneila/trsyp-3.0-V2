'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const TUNISIA_PLACES = [
  { name: 'Sidi Bou Said', desc: 'Iconic blue & white clifftop village' },
  { name: 'Carthage Ruins', desc: 'Ancient UNESCO World Heritage site' },
  { name: 'Medina of Tunis', desc: 'Historic old city, vibrant souks' },
  { name: 'Djerba Island', desc: 'Mediterranean island paradise' },
  { name: 'Sahara Desert', desc: 'Endless dunes, starlit nights' },
  { name: 'El Jem Amphitheatre', desc: 'Roman colosseum, remarkably preserved' },
  { name: 'Hammamet', desc: 'Coastal resort town, golden beaches' },
  { name: 'Douz', desc: 'Gateway to the Sahara' },
];

const RATES: Record<string, number> = {
  USD: 3.12, EUR: 3.42, GBP: 3.95, CAD: 2.30, AUD: 2.05,
  JPY: 0.021, CNY: 0.43, INR: 0.037, MAD: 0.31, EGP: 0.064,
  SAR: 0.83, AED: 0.85, KWD: 10.18, QAR: 0.86, TRY: 0.096,
  BRL: 0.61, KRW: 0.0023, CHF: 3.58, SEK: 0.30, DKK: 0.46,
};

function CurrencyConverter() {
  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('USD');
  const [result, setResult] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const rate = RATES[currency] || 1;
    const val = parseFloat(amount) || 0;
    setResult(val * rate);
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 600);
    return () => clearTimeout(t);
  }, [amount, currency]);

  return (
    <div className="converter">
      <div className="converter-robot">
        <div className="converter-robot-head">
          <div className="converter-robot-eye left" />
          <div className="converter-robot-eye right" />
          <div className={`converter-robot-mouth ${typing ? 'is-talking' : ''}`} />
        </div>
        <div className="converter-robot-body">
          <div className="converter-robot-screen">
            <span className="converter-robot-screen-label">PROCESSING</span>
            <div className={`converter-robot-bars ${typing ? 'is-active' : ''}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="converter-robot-arms">
          <span className="converter-robot-arm left" />
          <span className="converter-robot-arm right" />
        </div>
      </div>

      <div className="converter-panel">
        <div className="converter-speech">
          <p>
            {typing
              ? 'Computing exchange rate...'
              : `${parseFloat(amount) || 0} ${currency} = ${result.toFixed(2)} TND`}
          </p>
        </div>

        <div className="converter-inputs">
          <div className="converter-field">
            <label className="converter-label">Amount</label>
            <input
              type="number"
              className="converter-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="any"
            />
          </div>
          <div className="converter-field">
            <label className="converter-label">Currency</label>
            <select
              className="converter-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {Object.keys(RATES).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="converter-result">
          <span className="converter-result-label">Tunisian Dinar (TND)</span>
          <span className="converter-result-value">{result.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default function VenuePage() {
  return (
    <div className="venue-pg">
      {/* Hero */}
      <section className="prog-hero">
        <div className="prog-hero-bg" />
        <div className="prog-hero-overlay" />
        <div className="prog-hero-inner">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-line" />
            <span className="prog-eyebrow-text">Location & Travel</span>
            <span className="prog-eyebrow-line" />
          </div>
          <h1 className="prog-hero-h">VENUE</h1>
        </div>
      </section>

      {/* Section 1: Where */}
      <section className="venue-where">
        <div className="prog-container">
          <div className="venue-where-header">
            <div className="prog-eyebrow">
              <span className="prog-eyebrow-line" />
              <span className="prog-eyebrow-text">Where It Happens</span>
            </div>
            <h2 className="venue-section-title">The Venue</h2>
          </div>

          <motion.div
            className="venue-hotel-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="venue-hotel-img">
              <div className="venue-hotel-placeholder">
                <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="10" y="20" width="100" height="50" rx="4" />
                  <rect x="20" y="30" width="12" height="12" rx="1" />
                  <rect x="38" y="30" width="12" height="12" rx="1" />
                  <rect x="56" y="30" width="12" height="12" rx="1" />
                  <rect x="74" y="30" width="12" height="12" rx="1" />
                  <rect x="92" y="30" width="12" height="12" rx="1" />
                  <rect x="20" y="48" width="12" height="12" rx="1" />
                  <rect x="38" y="48" width="12" height="12" rx="1" />
                  <rect x="56" y="48" width="12" height="12" rx="1" />
                  <rect x="74" y="48" width="12" height="12" rx="1" />
                  <rect x="92" y="48" width="12" height="12" rx="1" />
                  <path d="M50 70h20v10H50z" />
                  <path d="M55 10h10v10H55z" />
                </svg>
                <span>Hotel Photo</span>
              </div>
            </div>
            <div className="venue-hotel-info">
              <span className="venue-hotel-badge">TRSYP 3.0 HOST VENUE</span>
              <h3 className="venue-hotel-name">Hotel Name — Tunis</h3>
              <p className="venue-hotel-desc">
                A premium venue in the heart of Tunis, equipped with state-of-the-art conference
                facilities, exhibition halls, and workshop rooms to host 350+ attendees.
              </p>
              <div className="venue-hotel-details">
                <div className="venue-detail">
                  <span className="venue-detail-label">Date</span>
                  <b>03–04 October 2026</b>
                </div>
                <div className="venue-detail">
                  <span className="venue-detail-label">Location</span>
                  <b>Tunis, Tunisia</b>
                </div>
                <div className="venue-detail">
                  <span className="venue-detail-label">Capacity</span>
                  <b>350+ Seats</b>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Discover Tunisia */}
      <section className="venue-tunisia">
        <div className="prog-container">
          <div className="venue-tunisia-header">
            <div className="prog-eyebrow">
              <span className="prog-eyebrow-line" />
              <span className="prog-eyebrow-text">Discover Tunisia</span>
            </div>
            <h2 className="venue-section-title">Beyond the Conference</h2>
            <p className="venue-tunisia-sub">
              Tunisia sits at the crossroads of Africa and Europe — ancient ruins, Mediterranean
              coastline, Saharan dunes, and vibrant culture, all within a few hours of Tunis.
            </p>
          </div>

          {/* Map card */}
          <motion.div
            className="venue-map-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="venue-map-placeholder">
              <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 30 L180 50 L190 80 L200 100 L210 120 L200 150 L210 180 L220 200 L210 240 L180 260 L160 300 L140 340 L130 360 L120 340 L110 300 L100 280 L90 260 L80 220 L90 180 L100 150 L95 120 L100 100 L110 80 L120 50 Z"
                  stroke="var(--color-green)" strokeWidth="1.5" fill="rgba(0,232,122,0.05)" />
                <circle cx="150" cy="120" r="6" fill="var(--color-green)">
                  <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="162" y="124" fill="var(--color-green)" fontSize="10" fontFamily="var(--font-heading)">TUNIS</text>
                <circle cx="170" cy="105" r="3" fill="var(--color-pink)" opacity="0.7" />
                <text x="178" y="109" fill="rgba(255,255,255,0.5)" fontSize="8">Carthage</text>
                <circle cx="120" cy="250" r="3" fill="var(--color-pink)" opacity="0.7" />
                <text x="128" y="254" fill="rgba(255,255,255,0.5)" fontSize="8">Douz</text>
                <circle cx="200" cy="200" r="3" fill="var(--color-pink)" opacity="0.7" />
                <text x="208" y="204" fill="rgba(255,255,255,0.5)" fontSize="8">Djerba</text>
              </svg>
            </div>
            <div className="venue-map-info">
              <h3>Tunisia at a Glance</h3>
              <div className="venue-map-stats">
                <div><b>12M</b><span>Population</span></div>
                <div><b>1,300 km</b><span>Coastline</span></div>
                <div><b>8</b><span>UNESCO Sites</span></div>
                <div><b>GMT+1</b><span>Timezone</span></div>
              </div>
            </div>
          </motion.div>

          {/* Places carousel */}
          <div className="venue-places-wrap">
            <div className="venue-places-track">
              {[...TUNISIA_PLACES, ...TUNISIA_PLACES].map((p, i) => (
                <div key={i} className="venue-place-card">
                  <div className="venue-place-img">
                    <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4">
                      <rect x="5" y="5" width="50" height="30" rx="2" />
                      <circle cx="20" cy="18" r="5" />
                      <path d="M5 30l15-10 10 6 15-12 10 8" />
                    </svg>
                  </div>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Currency Converter */}
      <section className="venue-currency">
        <div className="prog-container">
          <div className="venue-currency-header">
            <div className="prog-eyebrow">
              <span className="prog-eyebrow-line" />
              <span className="prog-eyebrow-text">Currency Exchange</span>
            </div>
            <h2 className="venue-section-title">Money Converter</h2>
            <p className="venue-currency-sub">
              Let our robotic assistant help you convert your currency to Tunisian Dinar before your trip.
            </p>
          </div>
          <CurrencyConverter />
        </div>
      </section>
    </div>
  );
}

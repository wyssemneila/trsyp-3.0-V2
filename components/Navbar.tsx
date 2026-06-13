'use client';

import { useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Challenge', href: '/challenge' },
  { label: 'Program', href: '/program' },
  { label: 'Venue', href: '/venue' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo" href="/">
          <Image
            src="/trsyp-logo.png"
            alt="TRSYP 3.0"
            width={240}
            height={82}
            priority
            style={{ height: '146px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button className="navbar-register" onClick={() => setShowRegister(true)}>
          Register Now
        </button>

        <button
          className="navbar-hamburger"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>

      <div className={`navbar-mobile-menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <button
          className="navbar-mobile-register"
          onClick={() => { setOpen(false); setShowRegister(true); }}
        >
          Register Now
        </button>
      </div>

      {showRegister && (
        <div className="reg-overlay" onClick={() => setShowRegister(false)}>
          <div className="reg-popup" onClick={(e) => e.stopPropagation()}>
            <button className="reg-close" onClick={() => setShowRegister(false)} aria-label="Close">
              &times;
            </button>
            <div className="reg-popup-header">
              <span className="reg-popup-badge">TRSYP 3.0</span>
              <h3 className="reg-popup-title">Register As</h3>
              <p className="reg-popup-sub">Choose your registration type</p>
            </div>
            <div className="reg-popup-buttons">
              <a href="#" className="reg-btn reg-btn-participant">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Participant</span>
              </a>
              <a href="#" className="reg-btn reg-btn-challenger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>Challenger</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

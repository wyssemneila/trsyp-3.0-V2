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
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a className="navbar-register" href="#register">
          Register Now
        </a>

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
        <a className="navbar-mobile-register" href="#register" onClick={() => setOpen(false)}>
          Register Now
        </a>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        {/* Top row — brand + links */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-brand-title">
              TRSYP<span className="footer-brand-accent">3.0</span>
            </h3>
            <p className="footer-brand-sub">
              IEEE Tunisian RAS Student &amp; Young Professional Congress
            </p>
            <p className="footer-brand-date">October 3–4, 2025 — Tunisia</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Navigate</h4>
              <a href="#about" className="footer-link">About</a>
              <a href="#our-theme" className="footer-link">Our Theme</a>
              <a href="#why-join" className="footer-link">Why Join</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Program</h4>
              <a href="#" className="footer-link">Schedule</a>
              <a href="#" className="footer-link">Speakers</a>
              <a href="#" className="footer-link">Competitions</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">IEEE INSAT SB</a>
              <a href="#" className="footer-link">IEEE RAS Tunisia</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 TRSYP 3.0 — IEEE RAS Tunisia Section. All rights reserved.
          </p>
          <div className="footer-socials">
            {/* Facebook */}
            <a href="#" className="footer-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="footer-social" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

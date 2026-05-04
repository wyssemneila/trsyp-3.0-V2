const WHY_ITEMS = [
  {
    text: 'NETWORK WITH 350+ ENGINEERS, STUDENTS, & YPS FROM TUNISIA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    text: 'COMPETE IN REAL-WORLD ROBOTICS CHALLENGES',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    text: 'LEARN FROM 20+ INDUSTRY EXPERTS & RESEARCHERS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function WhyJoinSection() {
  return (
    <section className="why" id="why-join">
      {/* Background accents */}
      <div className="why-glow-left" aria-hidden="true" />
      <div className="why-glow-right" aria-hidden="true" />

      <div className="why-inner">
        {/* Header */}
        <div className="why-header">
          <p className="why-eyebrow">
            <span className="why-diamond">◆</span> The TRSYP Experience <span className="why-diamond">◆</span>
          </p>
          <h2 className="why-title">
            WHY JOIN US<span className="why-title-q">?</span>
          </h2>
          <div className="why-title-deco">
            <span className="why-deco-line" />
            <span className="why-deco-diamond">◆</span>
            <span className="why-deco-line" />
          </div>
        </div>

        {/* Cards */}
        <div className="why-cards">
          {WHY_ITEMS.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-card-inner">
                <div className="why-icon-wrap">
                  <div className="why-icon-ring" />
                  {item.icon}
                </div>
                <p className="why-card-text">{item.text}</p>
                <div className="why-card-underline" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

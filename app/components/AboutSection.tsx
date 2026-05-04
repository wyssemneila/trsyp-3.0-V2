import styles from "./AboutSection.module.css";

function PerceptionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function SymbiosisIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function EthicsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const PILLARS = [
  {
    icon: <PerceptionIcon />,
    title: "Perception & Autonomy",
    desc: "Advancing robotic perception, real-time decision-making, and autonomous systems that extend human capabilities.",
  },
  {
    icon: <SymbiosisIcon />,
    title: "Human-Robot Co-Design",
    desc: "Building collaborative systems where human intuition and machine precision work as one unified intelligence.",
  },
  {
    icon: <EthicsIcon />,
    title: "Ethics & Impact",
    desc: "Ensuring inclusive design, societal accountability, and ethical compliance shape every innovation we deploy.",
  },
];

const STATS = [
  { number: "3rd", label: "Edition" },
  { number: "2", label: "Days of Innovation" },
  { number: "350+", label: "Participants" },
  { number: "20+", label: "Speakers & Experts" },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutWrapper} id="about">
      {/* Atmospheric background */}
      <div className={styles.atmosphereBg}>
        <div className={styles.gridOverlay} />
        <div className={styles.glowOrb1} />
        <div className={styles.glowOrb2} />
        <div className={styles.glowOrb3} />
      </div>

      <div className={styles.aboutInner}>
        {/* Section eyebrow */}
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>About the Congress</span>
        </div>

        {/* Two-column hero */}
        <div className={styles.heroGrid}>
          {/* Left — Title */}
          <div className={styles.titleColumn}>
            <div className={styles.verticalAccent} />
            <h2 className={styles.mainTitle}>
              TRSYP
              <span className={styles.titleAccent}>3.0</span>
            </h2>
            <p className={styles.edition}>Third Edition &mdash; 2025</p>
            <p className={styles.tagline}>
              Where <span className={styles.taglineHighlight}>human intuition</span> meets{" "}
              <span className={styles.taglineHighlight}>machine precision</span> &mdash;
              shaping the future of robotics, together.
            </p>
          </div>

          {/* Right — Description + Pillars */}
          <div className={styles.descriptionColumn}>
            <p className={styles.descriptionText}>
              The <strong>Tunisian RAS Student and Young Professional Congress</strong>,
              organized by the IEEE INSAT Student Branch in collaboration with the
              IEEE RAS Tunisia Section, is the annual flagship gathering of robotics
              enthusiasts from across Tunisia and beyond.
              <br /><br />
              This edition explores <strong>Human&ndash;Robot Symbiosis</strong> as a
              foundational paradigm &mdash; the co-design of next-generation solutions
              that fuse robotic capabilities with human strengths like decision-making,
              ethics, and adaptability.
            </p>

            <div className={styles.pillars}>
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{pillar.icon}</div>
                  <div className={styles.pillarContent}>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.dividerLine} />

        {/* Stats ribbon */}
        <div className={styles.statsRibbon}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              {i < STATS.length - 1 && <div className={styles.statDivider} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

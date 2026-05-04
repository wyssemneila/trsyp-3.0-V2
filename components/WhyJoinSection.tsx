'use client';

import { useState } from 'react';

const WHY_ITEMS = [
  {
    title: 'BUILD & BATTLE',
    desc: 'Put your engineering skills to the test in real-world robotics challenges — from line-followers to autonomous navigation.',
    stat: '5+',
    statLabel: 'Competitions',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" />
        <circle cx="24" cy="24" r="8" />
        <path d="M10 10l6 6M32 32l6 6M10 38l6-6M32 16l6-6" />
        <rect x="18" y="18" width="12" height="12" rx="2" strokeWidth={1.2} />
      </svg>
    ),
  },
  {
    title: 'CONNECT & COLLABORATE',
    desc: 'Join 350+ engineers, researchers, and young professionals shaping the future of robotics across Tunisia and beyond.',
    stat: '350+',
    statLabel: 'Attendees',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="5" />
        <circle cx="32" cy="16" r="5" />
        <path d="M24 28c-8 0-14 4-14 8v4h28v-4c0-4-6-8-14-8z" />
        <path d="M33 22c4.5 1 8 4.2 8 7.5V32" />
        <path d="M15 22c-4.5 1-8 4.2-8 7.5V32" />
        <circle cx="24" cy="10" r="3" strokeWidth={1.2} />
        <path d="M24 13v4" strokeWidth={1.2} />
      </svg>
    ),
  },
  {
    title: 'LEARN FROM THE BEST',
    desc: 'Attend keynotes & workshops led by 20+ industry experts — from ROS2 deep-dives to AI-driven control systems.',
    stat: '20+',
    statLabel: 'Speakers',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="32" height="24" rx="3" />
        <path d="M24 30v8M16 38h16" />
        <circle cx="24" cy="18" r="4" strokeWidth={1.2} />
        <path d="M15 12h3M30 12h3" strokeWidth={1.2} />
        <path d="M18 22c0 0 2 3 6 3s6-3 6-3" strokeWidth={1.2} />
        <path d="M13 6V3M35 6V3" strokeWidth={1} />
      </svg>
    ),
  },
];

export default function WhyJoinSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="why" id="why-join">
      <div className="why-grid-bg" aria-hidden="true" />
      <div className="why-glow-left" aria-hidden="true" />
      <div className="why-glow-right" aria-hidden="true" />

      <div className="why-inner">
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="why-eyebrow-line" />
            <span className="why-eyebrow-text">The TRSYP Experience</span>
            <span className="why-eyebrow-line" />
          </div>
          <h2 className="why-title">
            WHY JOIN<span className="why-title-q"> US?</span>
          </h2>
          <p className="why-subtitle">Three reasons to be part of Tunisia&rsquo;s biggest robotics gathering</p>
        </div>

        <div className="why-cards">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`why-card ${hovered === i ? 'why-card--active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="why-card-number">0{i + 1}</div>
              <div className="why-icon-wrap">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
              <div className="why-card-stat">
                <span className="why-card-stat-num">{item.stat}</span>
                <span className="why-card-stat-label">{item.statLabel}</span>
              </div>
              <div className="why-card-underline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

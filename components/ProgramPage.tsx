'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const PROGRAM = [
  {
    id: 'pre',
    code: '00',
    label: 'Pre-Conference',
    title: 'Conference Journey',
    sub: 'Bibliothèque Humaine Robotique',
    date: 'September 2026',
    where: 'Online + ALECSO HQ',
    intro: 'A three-act prologue. Forms, invitations, and an exclusive robotics preview with ALECSO and INSAT — before the main stage opens.',
    items: [
      { time: 'Early Sep', title: 'Participant Forms', body: 'Complete registration & participant forms to secure your spot and customize your experience.', kind: 'admin', room: 'Online', who: 'All registrants', tags: ['Required'] },
      { time: 'Mid Sep', title: 'Invitations', body: 'Official invitations distributed to selected participants, speakers, and VIPs.', kind: 'admin', room: 'Email', who: 'Selected list', tags: ['By invite'] },
      { time: 'Late Sep', title: 'ALECSO × INSAT Preview', body: 'Special collaboration with ALECSO and INSAT — an exclusive robotics exposition preview.', kind: 'special', room: 'ALECSO HQ', who: 'Speakers · Partners · Press', tags: ['Exclusive', 'Preview'] },
    ],
  },
  {
    id: 'd1',
    code: '01',
    label: 'Day 01',
    title: 'Innovation & Discovery',
    sub: 'Where the symbiosis begins',
    date: '03 October 2026 · Friday',
    where: 'INSAT — Main Hall, Tunis',
    intro: 'Doors open. Posters up. Challenges launched. A full day stretching from morning keynotes to a late-night DJ set — under one roof.',
    items: [
      { time: '08:00', dur: '1h', title: 'Check-in & Registration', body: 'Pick up your badge, kit, and coffee.', kind: 'admin', room: 'Lobby', who: 'All attendees', tags: ['Required'] },
      { time: '09:00', dur: '1h', title: 'Opening Ceremony + Panel', body: 'Keynote addresses and an expert panel on Human-Robot Symbiosis with leaders from IEEE RAS and partner institutions.', kind: 'keynote', room: 'Main Hall', who: 'Plenary · 350 seats', tags: ['Plenary', 'Speakers'] },
      { time: '10:30', dur: '3h', title: 'Poster Session + Expo', body: 'Research poster presentations alongside the robotics exposition. Talk directly with authors.', kind: 'expo', room: 'Atrium', who: 'Open · drop-in', tags: ['Hands-on', 'Networking'] },
      { time: 'All Day', title: 'Enterprise Exhibition', body: 'Company exhibits running throughout both days — robotics, AI, and embedded systems leaders.', kind: 'expo', room: 'Expo Hall', who: 'Open · drop-in', tags: ['Sponsors', 'Recruiting'], persistent: true },
      { time: '14:00', dur: '4h', title: 'Challenges Launch', body: 'Kick-off of the non-technical challenge plus the launch of the technical challenge with an accompanying workshop & round-table.', kind: 'compete', room: 'Main Hall + Labs', who: 'Teams · 4–6 people', tags: ['Compete', 'Hands-on'] },
      { time: '19:00', dur: '2h', title: 'Gala Dinner', body: 'A taste of Tunisia, shared with fellow innovators.', kind: 'social', room: 'Rooftop', who: 'All attendees', tags: ['Networking'] },
      { time: '21:00', dur: '1h30', title: 'Competition Finals + DJ Night', body: 'Evening competition rounds followed by a live DJ set to keep the energy going.', kind: 'compete', room: 'Main Hall', who: 'All attendees', tags: ['Compete', 'Live'] },
      { time: '22:30', title: 'Social Activity', body: 'Unwind and bond with participants through curated team activities.', kind: 'social', room: 'Rooftop', who: 'All attendees', tags: ['Networking'] },
    ],
  },
  {
    id: 'd2',
    code: '02',
    label: 'Day 02',
    title: 'Learning & Celebration',
    sub: 'Workshops, leadership, and the closing bow',
    date: '04 October 2026 · Saturday',
    where: 'INSAT — Main Hall, Tunis',
    intro: 'Hands deep in the work. Four parallel workshops, a leadership round-table, and a closing ceremony where the winners walk away with the trophies.',
    items: [
      { time: '08:00', dur: '1h', title: 'Breakfast', body: 'Start strong. Pastries, coffee, conversation.', kind: 'social', room: 'Atrium', who: 'All attendees', tags: ['Networking'] },
      { time: '09:00', dur: '2h', title: 'Workshops · 4 in Parallel', body: 'Four concurrent workshops — choose the track that fits your passion and skill level. Pre-registration required.', kind: 'workshop', room: 'Labs A · B · C · D', who: 'Pre-registered · 30 / room', tags: ['Hands-on', 'Pick one'], parallel: ['ROS 2 in Practice', 'Computer Vision', 'Embedded AI', 'Tech Communication'] },
      { time: '11:00', dur: '1h', title: 'Leadership Meeting', body: 'Section-specific leadership roundtable to shape the future of IEEE RAS in Tunisia.', kind: 'keynote', room: 'Boardroom', who: 'Section officers', tags: ['By invite'] },
      { time: '12:30', dur: '2h', title: 'Buffet Lunch', body: 'Refuel and recharge before the grand finale.', kind: 'social', room: 'Atrium', who: 'All attendees', tags: ['Networking'] },
      { time: '14:30', dur: '1h30', title: 'Closing Ceremony', body: 'Partner addresses · Challenge winners · Competition winners · Best Ambassador & Coordinator awards.', kind: 'keynote', room: 'Main Hall', who: 'Plenary', tags: ['Plenary', 'Awards'] },
    ],
  },
];

interface ProgramItem {
  time: string;
  dur?: string;
  title: string;
  body: string;
  kind: string;
  room: string;
  who: string;
  tags: string[];
  persistent?: boolean;
  parallel?: string[];
}

interface ProgramDay {
  id: string;
  code: string;
  label: string;
  title: string;
  sub: string;
  date: string;
  where: string;
  intro: string;
  items: ProgramItem[];
}

const KIND_META: Record<string, { label: string; icon: string }> = {
  admin: { label: 'Logistics', icon: '◷' },
  keynote: { label: 'Stage', icon: '◆' },
  expo: { label: 'Exhibition', icon: '▦' },
  compete: { label: 'Compete', icon: '✦' },
  workshop: { label: 'Workshop', icon: '⌬' },
  social: { label: 'Social', icon: '◉' },
  special: { label: 'Special', icon: '✺' },
};

function StickyNav({ active, onNav }: { active: string; onNav: (id: string) => void }) {
  return (
    <>
      <div className="prog-snav-spacer" />
      <div className="prog-snav-wrap">
        <div className="prog-container">
          <nav className="prog-snav">
            {PROGRAM.map((p) => (
              <button
                key={p.id}
                className={`prog-snav-btn ${active === p.id ? 'is-active' : ''}`}
                onClick={() => onNav(p.id)}
              >
                <span className="prog-snav-num">{p.code}</span>
                <span className="prog-snav-tx">
                  <span>{p.label}</span>
                  <em>{p.title}</em>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function TimeStrip({ day }: { day: ProgramDay }) {
  if (day.id === 'pre') return null;
  const HOUR_START = 8;
  const HOUR_END = 23;
  const span = HOUR_END - HOUR_START;

  const parseTime = (t: string) => {
    if (/^\d{2}:\d{2}$/.test(t)) return parseInt(t.slice(0, 2), 10) + parseInt(t.slice(3), 10) / 60;
    return null;
  };
  const parseDur = (d?: string) => {
    if (!d || d === '—' || d === 'late') return 1;
    const m = d.match(/(\d+)h(\d+)?/);
    if (m) return parseInt(m[1], 10) + (m[2] ? parseInt(m[2], 10) / 60 : 0);
    return 1;
  };

  return (
    <div className="prog-strip">
      <div className="prog-strip-hd">
        <span>At a glance</span>
        <span>{HOUR_START}:00 — {HOUR_END}:00</span>
      </div>
      <div className="prog-strip-bar">
        <div className="prog-strip-grid">
          {Array.from({ length: span + 1 }).map((_, i) => (
            <span key={i} className="prog-strip-tick"><b>{HOUR_START + i}</b></span>
          ))}
        </div>
        <div className="prog-strip-blocks">
          {day.items.map((it, i) => {
            const start = parseTime(it.time);
            if (start === null) return null;
            const dur = parseDur(it.dur);
            const left = ((start - HOUR_START) / span) * 100;
            const width = (dur / span) * 100;
            return (
              <div
                key={i}
                className="prog-strip-block"
                data-kind={it.kind}
                style={{ left: `${left}%`, width: `${Math.max(width, 2.5)}%` }}
                title={`${it.time} · ${it.title}`}
              >
                <span className="prog-strip-block-time">{it.time}</span>
                <span className="prog-strip-block-title">{it.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ScheduleCard({ item, isFirst, isLast }: { item: ProgramItem; isFirst: boolean; isLast: boolean }) {
  const meta = KIND_META[item.kind] || { label: 'Session', icon: '◇' };
  return (
    <article className={`prog-card ${isFirst ? 'is-first' : ''} ${isLast ? 'is-last' : ''}`} data-kind={item.kind}>
      <div className="prog-card-time">
        <span className="prog-card-time-num">{item.time}</span>
        {item.dur && <span className="prog-card-time-dur">{item.dur}</span>}
      </div>
      <div className="prog-card-rail">
        <span className="prog-card-node" data-kind={item.kind}>
          <span>{meta.icon}</span>
        </span>
      </div>
      <div className="prog-card-body">
        <div className="prog-card-tags">
          <span className="prog-card-kind" data-kind={item.kind}>{meta.label}</span>
          {item.tags.map((t) => (
            <span key={t} className="prog-card-tag">{t}</span>
          ))}
          {item.persistent && <span className="prog-card-tag prog-card-tag--soft">Both days</span>}
        </div>
        <h3 className="prog-card-title">{item.title}</h3>
        <p className="prog-card-desc">{item.body}</p>
        <div className="prog-card-meta">
          <div className="prog-cm">
            <span className="prog-cm-lbl">Where</span>
            <span className="prog-cm-val">{item.room}</span>
          </div>
          <div className="prog-cm">
            <span className="prog-cm-lbl">For</span>
            <span className="prog-cm-val">{item.who}</span>
          </div>
        </div>
        {item.parallel && (
          <div className="prog-parallel">
            <div className="prog-parallel-hd">4 Tracks · Choose one</div>
            <div className="prog-parallel-grid">
              {item.parallel.map((p, j) => (
                <div key={j} className="prog-parallel-cell">
                  <span className="prog-parallel-letter">{String.fromCharCode(65 + j)}</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function DaySection({ day }: { day: ProgramDay }) {
  return (
    <section className="prog-day" id={`section-${day.id}`}>
      <div className="prog-container">
        <motion.div
          className="prog-day-hd"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-line" />
            <span className="prog-eyebrow-text">{day.label}</span>
            <span className="prog-eyebrow-line" />
          </div>
          <h2 className="prog-day-h">{day.title}</h2>
          <p className="prog-day-sub">{day.sub}</p>
          <div className="prog-day-meta">
            <div className="prog-dm"><span>Date</span><b>{day.date}</b></div>
            <div className="prog-dm"><span>Venue</span><b>{day.where}</b></div>
            <div className="prog-dm"><span>Sessions</span><b>{day.items.length} on the schedule</b></div>
          </div>
          <p className="prog-day-intro">{day.intro}</p>
        </motion.div>

        <TimeStrip day={day} />

        <div className="prog-sched">
          {day.items.map((it, i) => (
            <ScheduleCard key={i} item={it} isFirst={i === 0} isLast={i === day.items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramPage() {
  const [active, setActive] = useState('pre');

  useEffect(() => {
    const ids = PROGRAM.map((p) => 'section-' + p.id);
    const getTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;
    const onScroll = () => {
      const y = window.scrollY + 200;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && getTop(el) <= y) cur = id;
      }
      setActive(cur.replace('section-', ''));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById('section-' + id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="prog-page">
      {/* Hero */}
      <section className="prog-hero">
        <div className="prog-hero-bg" />
        <div className="prog-hero-overlay" />
        <div className="prog-hero-inner">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-line" />
            <span className="prog-eyebrow-text">03–04 October 2026 · INSAT, Tunis</span>
            <span className="prog-eyebrow-line" />
          </div>
          <h1 className="prog-hero-h">PROGRAM</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="prog-intro">
        <div className="prog-container">
          <div className="prog-intro-grid">
            <div className="prog-intro-left">
              <div className="prog-eyebrow">
                <span className="prog-eyebrow-line" />
                <span className="prog-eyebrow-text">About the Program</span>
              </div>
              <h2 className="prog-intro-h">
                48 hours of <span className="prog-hl">robotics</span>, research, and real human stories.
              </h2>
            </div>
            <div className="prog-intro-right">
              <p>
                The TRSYP 3.0 program unfolds in three movements: a quiet <b>pre-conference</b> warm-up
                through September, a high-energy <b>Day 01</b> built around discovery and competition, and
                a hands-on <b>Day 02</b> dedicated to learning, leadership, and celebration.
              </p>
            </div>
          </div>

          <div className="prog-stats">
            {[
              ['03', 'Acts'],
              ['16+', 'Sessions'],
              ['04', 'Workshops'],
              ['48h', 'On stage'],
            ].map(([n, l]) => (
              <div key={l} className="prog-stat">
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <StickyNav active={active} onNav={handleNav} />

      {/* Day Sections */}
      <div className="prog-main">
        {PROGRAM.map((d) => (
          <DaySection key={d.id} day={d} />
        ))}
      </div>

      {/* CTA */}
      <section className="prog-cta">
        <div className="prog-container">
          <div className="prog-cta-inner">
            <div className="prog-eyebrow">
              <span className="prog-eyebrow-line" />
              <span className="prog-eyebrow-text">Don&apos;t miss out</span>
              <span className="prog-eyebrow-line" />
            </div>
            <h2 className="prog-cta-h">
              Secure your seat.<br /><span className="prog-hl">Limited capacity.</span>
            </h2>
            <p className="prog-cta-p">Two days. One symbiosis. Zero excuses.</p>
            <a href="#register" className="prog-cta-btn">REGISTER NOW</a>
          </div>
        </div>
      </section>
    </div>
  );
}

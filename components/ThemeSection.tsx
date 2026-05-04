import Image from 'next/image';

export default function ThemeSection() {
  return (
    <section className="theme-section" id="our-theme">
      <Image
        className="theme-banner-img"
        src="/banner.png"
        alt="Human and robot facing each other — Human-Robot Symbiosis"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority={false}
      />
      <div className="theme-overlay" />
      <div className="theme-content">
        <span className="theme-label">Our Theme</span>
        <div className="theme-dash" />
        <h2 className="theme-title">
          Human<em>–</em>Robot Symbiosis
        </h2>
      </div>
    </section>
  );
}

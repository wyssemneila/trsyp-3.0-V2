'use client';

const PLACEHOLDER_IMAGES = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `TRSYP 2.0 — Photo ${i + 1}`,
}));

export default function PreviousEditionSection() {
  return (
    <section className="prev-edition" id="previous-edition">
      <div className="prev-edition-inner">
        <div className="prev-edition-header">
          <div className="prev-edition-eyebrow">
            <span className="prev-edition-eyebrow-line" />
            <span className="prev-edition-eyebrow-text">Look Back</span>
            <span className="prev-edition-eyebrow-line" />
          </div>
          <h2 className="prev-edition-title">Previous Edition</h2>
          <p className="prev-edition-sub">Highlights from TRSYP 2.0</p>
        </div>

        {/* Infinite scrolling carousel — CSS-driven */}
        <div className="carousel-track-wrap">
          <div className="carousel-track">
            {[...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES].map((img, i) => (
              <div key={i} className="carousel-slide">
                <div className="carousel-placeholder">
                  <span className="carousel-placeholder-text">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

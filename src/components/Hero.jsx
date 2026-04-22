import { useEffect, useRef } from 'react';
import './Hero.css';

function splitChars(word, startDelay = 0, step = 0.03) {
  return Array.from(word).map((char, i) => (
    <span
      key={`${char}-${i}`}
      className="char"
      style={{ animationDelay: `${startDelay + i * step}s` }}
    >
      {char}
    </span>
  ));
}

export default function Hero() {
  const portraitRef = useRef(null);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${Math.min(y * 0.15, 120)}px) rotate(${Math.min(y * 0.01, 4)}deg)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="grid-bg" />

      <div className="hero-top">
        <div>
          <span style={{ color: 'var(--coral)' }}>●</span>&nbsp;&nbsp;AVAILABLE
          FOR COLLABS — 2026
        </div>
        <div className="right">
          Reels Creator &nbsp;·&nbsp; Content Specialist
        </div>
      </div>

      <div className="hero-portrait" data-hover ref={portraitRef}>
        <div className="ph">
          <span>portrait — 4:5</span>
        </div>
      </div>

      <div className="hero-title">
        <span className="big">{splitChars('Gouri', 0)}</span>
        <span className="big italic" style={{ paddingLeft: '.15em' }}>
          {splitChars('Gireesan', 0.2)}
          <span
            className="char"
            style={{ animationDelay: '.44s', color: 'var(--ink)' }}
          >
            .
          </span>
        </span>
      </div>

      <div className="hero-meta">
        <div>
          <span>Based in</span>
          <strong>Kochi, Kerala</strong>
        </div>
        <div>
          <span>Role</span>
          <strong>Digital Marketer · Creator</strong>
        </div>
        <div>
          <span>Focus</span>
          <strong>Reels · SEO · Carousels</strong>
        </div>
        <div>
          <span>Since</span>
          <strong>2024 — onward</strong>
        </div>
      </div>

      <div className="hero-scroll">Scroll to explore</div>
    </section>
  );
}

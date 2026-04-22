import { useEffect, useRef } from 'react';
import './Stats.css';

const STATS = [
  { to: 425, sym: 'K', label: 'Peak reel views', decimals: 0 },
  { to: 50, sym: '+', label: 'Reels produced', decimals: 0 },
  { to: 15, sym: '+', label: 'Brands collaborated', decimals: 0 },
  { to: 98, sym: '%', label: 'On-time delivery', decimals: 0 },
];

function Counter({ to, decimals = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const duration = 1400;
          const t0 = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const value = to * eased;
            el.textContent = decimals
              ? value.toFixed(decimals)
              : Math.floor(value).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, decimals]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div className="stat" key={i}>
            <div className="num">
              <Counter to={s.to} decimals={s.decimals} />
              <span className="sym">{s.sym}</span>
            </div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

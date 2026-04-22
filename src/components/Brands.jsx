import './Brands.css';

const BRANDS = [
  'Ekyam Clinic',
  'Mother & Child',
  'Casa Grante',
  'Jijivisha Global',
  '1st Step',
];

export default function Brands() {
  return (
    <section className="brands" aria-label="Brands I've worked with">
      <div className="brands-inner">
        <span className="eyebrow reveal">Trusted by · 2024—2026</span>
        <div className="brands-row reveal delay-1">
          {BRANDS.map((b, i) => (
            <span key={b} className="brand-name">
              {b}
              {i < BRANDS.length - 1 && <span className="sep" aria-hidden>✦</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import './Marquee.css';

const ITEMS = [
  'Reels Creator',
  'Content Specialist',
  'SEO',
  'Quality Checking',
  'WordPress',
  'Carousel Design',
  'Social Media Content',
];

function Track() {
  return (
    <span className="marquee-item">
      {ITEMS.map((item, i) => (
        <span key={i}>
          {item} <span className="dot" />{' '}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}

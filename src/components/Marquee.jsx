import './Marquee.css';

const ITEMS = [
  'Reels Creator',
  'Content Specialist',
  'Short-form Video',
  'Trend-based Content',
  'Carousel Design',
  'Social Media Creatives',
  'Digital Marketing',
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

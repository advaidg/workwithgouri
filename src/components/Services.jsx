import './Services.css';

const SERVICES = [
  {
    num: '(01)',
    title: 'Instagram Reels',
    desc: 'Engaging reels that capture attention and drive reach — built around hooks, pacing and trend relevance.',
    meta: 'Video',
  },
  {
    num: '(02)',
    title: 'Short-form Video Content',
    desc: 'Creative short videos for Instagram, YouTube Shorts and more — scripting, direction, editing and captions.',
    meta: 'Video',
  },
  {
    num: '(03)',
    title: 'Social Media Posters',
    desc: 'Eye-catching posts designed to match your brand — feed posters and stories that feel native, not stock.',
    meta: 'Design',
  },
  {
    num: '(04)',
    title: 'Carousel Designs',
    desc: 'Informative and engaging carousel posts that educate, entertain and convert — earning swipes, saves and shares.',
    meta: 'Design',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-head">
        <div>
          <span className="eyebrow reveal">Services · 02</span>
          <h2 className="h2 reveal delay-1" style={{ marginTop: 12 }}>
            Services
            <br />
            <span className="italic" style={{ color: 'var(--coral)' }}>
              I offer.
            </span>
          </h2>
        </div>
        <p className="reveal delay-2">
          End-to-end content, from the first hook to the last second of your
          reel hitting the feed. Four ways we can work together.
        </p>
      </div>

      <div className="services-list">
        {SERVICES.map((svc, i) => (
          <div
            key={svc.num}
            className={`svc reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''}`}
            data-hover
          >
            <div className="svc-num">{svc.num}</div>
            <div className="svc-title italic">{svc.title}</div>
            <div className="svc-desc">{svc.desc}</div>
            <div className="svc-meta">
              {svc.meta}&nbsp;<span className="arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

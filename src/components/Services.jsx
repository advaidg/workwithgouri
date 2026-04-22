import './Services.css';

const SERVICES = [
  {
    num: '(01)',
    title: 'Instagram Reels',
    desc: 'Hook-first reels built for awareness and reach — scripting, direction, editing, captions and covers that feel premium in the feed.',
    meta: 'Video',
  },
  {
    num: '(02)',
    title: 'Carousels & Creatives',
    desc: 'Educational carousels and scroll-native posters — clear hierarchy, strong covers, designed for saves, shares and swipes.',
    meta: 'Design',
  },
  {
    num: '(03)',
    title: 'Social Media Content',
    desc: 'End-to-end content for Instagram, LinkedIn and beyond — strategy, calendar, shoot direction and on-brand execution.',
    meta: 'Strategy',
  },
  {
    num: '(04)',
    title: 'SEO & WordPress',
    desc: 'On-page SEO, quality checking and WordPress updates — the un-glamorous glue that makes creative actually rank and convert.',
    meta: 'Marketing',
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
          Content that&apos;s pretty and content that performs shouldn&apos;t
          be two different things. Four ways I help brands do both.
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

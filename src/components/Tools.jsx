import './Tools.css';

const TOOLS = [
  {
    ico: 'Cv',
    name: 'Canva',
    desc: 'Designing social media posts, stories, carousels and more.',
    level: 5,
  },
  {
    ico: 'Cc',
    name: 'CapCut',
    desc: 'Video editing, transitions, effects and text animations.',
    level: 5,
  },
  {
    ico: 'In',
    name: 'InShot',
    desc: 'Editing for reels and short-form content on the go.',
    level: 4,
  },
  {
    ico: 'Ig',
    name: 'Meta Suite',
    desc: 'Scheduling, ads, insights and audience reporting.',
    level: 4,
  },
  {
    ico: 'St',
    name: 'Strategy',
    desc: 'Content planning, trend research & audience understanding.',
    level: 4,
  },
];

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="tools-head">
        <span className="eyebrow reveal">Toolkit · 04</span>
        <h2 className="h2 reveal delay-1" style={{ marginTop: 12 }}>
          Tools &amp;{' '}
          <span className="italic" style={{ color: 'var(--coral)' }}>
            skills.
          </span>
        </h2>
      </div>
      <div className="tools-grid">
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={`tool reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''}`}
          >
            <div className="ico">{t.ico}</div>
            <h4>{t.name}</h4>
            <p>{t.desc}</p>
            <div className="lvl">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className={idx < t.level ? 'on' : ''} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

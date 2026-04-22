import './Tools.css';

const TOOLS = [
  {
    ico: 'Cv',
    name: 'Canva',
    desc: 'Social posts, stories, carousels and creatives — daily driver for design.',
    level: 5,
    tag: 'Design',
  },
  {
    ico: 'Cc',
    name: 'CapCut',
    desc: 'Reel editing, transitions, sound-design, text animations and captions.',
    level: 5,
    tag: 'Video',
  },
  {
    ico: 'In',
    name: 'InShot',
    desc: 'Fast mobile edits for reels and short-form on the go.',
    level: 4,
    tag: 'Video',
  },
  {
    ico: '✦',
    name: 'Claude',
    desc: 'AI partner for ideation, scripting, caption copy and content strategy.',
    level: 5,
    tag: 'AI',
    accent: 'coral',
  },
  {
    ico: 'Gp',
    name: 'ChatGPT',
    desc: 'Research, outlines, alt copy and rapid hook brainstorming.',
    level: 5,
    tag: 'AI',
    accent: 'lime',
  },
  {
    ico: 'Mj',
    name: 'Midjourney',
    desc: 'Moodboards, concept art and custom thumbnails when stock won\u2019t do.',
    level: 4,
    tag: 'AI',
    accent: 'butter',
  },
  {
    ico: 'Ig',
    name: 'Meta Suite',
    desc: 'Scheduling, ads, insights, audience targeting and reporting.',
    level: 4,
    tag: 'Marketing',
  },
  {
    ico: 'Wp',
    name: 'WordPress',
    desc: 'Site structure, on-page SEO, content and quality checking.',
    level: 4,
    tag: 'Web',
  },
  {
    ico: 'Fg',
    name: 'Figma',
    desc: 'Layout exploration, brand kits and handoff-ready mockups.',
    level: 3,
    tag: 'Design',
  },
  {
    ico: 'St',
    name: 'Strategy',
    desc: 'Content planning, trend research and audience understanding.',
    level: 5,
    tag: 'Thinking',
  },
];

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="tools-head">
        <span className="eyebrow reveal">Toolkit · 04</span>
        <h2 className="h2 reveal delay-1" style={{ marginTop: 12 }}>
          Tools,{' '}
          <span className="italic" style={{ color: 'var(--coral)' }}>
            AI &amp; instinct.
          </span>
        </h2>
        <p className="tools-lede reveal delay-2">
          A modern creator stack — classic design tools paired with
          cutting-edge AI for ideation, scripts, covers and concept art.
        </p>
      </div>
      <div className="tools-grid">
        {TOOLS.map((t, i) => (
          <div
            key={t.name}
            className={`tool reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''}`}
            data-accent={t.accent || ''}
          >
            <div className="tool-head">
              <div className="ico">{t.ico}</div>
              <span className="tool-tag">{t.tag}</span>
            </div>
            <h4>{t.name}</h4>
            <p>{t.desc}</p>
            <div className="lvl" aria-label={`Proficiency ${t.level} of 5`}>
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

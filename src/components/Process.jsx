import './Process.css';

const STEPS = [
  {
    n: 'STEP / 01',
    title: (
      <>
        Listen &amp;<br />
        research
      </>
    ),
    desc: 'Brand tone, audience behaviour and what\u2019s actually working in your niche this month — not last year.',
  },
  {
    n: 'STEP / 02',
    title: (
      <>
        Script &amp;<br />
        storyboard
      </>
    ),
    desc: 'Hook-first scripts, frame-by-frame storyboards, caption drafts and covers designed to earn the tap.',
  },
  {
    n: 'STEP / 03',
    title: (
      <>
        Design &amp;<br />
        edit
      </>
    ),
    desc: 'Carousels, posters, reel edits, sound-design, subtitles, QC — polished until the scroll actually stops.',
  },
  {
    n: 'STEP / 04',
    title: (
      <>
        Publish &amp;<br />
        learn
      </>
    ),
    desc: 'Schedule, caption, measure and iterate. Every piece feeds the next one — that\u2019s how consistency compounds.',
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-head">
        <span className="eyebrow reveal">How I work · 05</span>
        <h2
          className="h2 reveal delay-1"
          style={{ marginTop: 12, color: 'var(--cream)' }}
        >
          The{' '}
          <span className="italic" style={{ color: 'var(--butter)' }}>
            process.
          </span>
        </h2>
      </div>
      <div className="process-grid">
        {STEPS.map((step, i) => (
          <div
            key={step.n}
            className={`step reveal${i > 0 ? ` delay-${Math.min(i, 3)}` : ''}`}
          >
            <div className="n">{step.n}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

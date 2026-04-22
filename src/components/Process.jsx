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
    desc: "Brand tone, audience behavior and what's actually trending in your niche this week — not last year.",
  },
  {
    n: 'STEP / 02',
    title: (
      <>
        Script &amp;<br />
        storyboard
      </>
    ),
    desc: 'Hook-first scripts, frame-by-frame storyboards, caption drafts and a thumb-stopping cover plan.',
  },
  {
    n: 'STEP / 03',
    title: (
      <>
        Shoot &amp;<br />
        edit
      </>
    ),
    desc: 'Direction, lighting notes, edit, sound-design, subtitles, color — until it looks and feels premium.',
  },
  {
    n: 'STEP / 04',
    title: (
      <>
        Publish &amp;<br />
        learn
      </>
    ),
    desc: 'Schedule, caption, boost when it matters, measure — and feed what we learn back into the next batch.',
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

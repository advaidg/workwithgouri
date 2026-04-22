import './About.css';

const CHIPS = [
  'Social Media Content',
  'SEO',
  'Quality Checking',
  'WordPress',
  'Reels Creation',
  'Carousels & Creatives',
  'Awareness Campaigns',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-img reveal">
          <img
            src="/portrait.jpg"
            alt="Gouri Gireesan — portrait"
            loading="lazy"
            width="720"
            height="900"
          />
          <div className="badge">Since '24</div>
          <div className="about-tag">Kochi · India</div>
        </div>
        <div>
          <span className="eyebrow reveal">About · 01</span>
          <h2 className="h2 reveal delay-1">
            Content that{' '}
            <span className="italic" style={{ color: 'var(--coral)' }}>
              actually stops
            </span>{' '}
            the scroll.
          </h2>
          <p className="lede reveal delay-2">
            Hi, I&apos;m <strong>Gouri</strong> — a digital marketer and content
            creator trained at <strong>Digital Scholar</strong>, based in Kochi.
            I work across social media content, SEO and quality checking — the
            unseen layers that make brand content feel both premium and
            performance-driven.
          </p>
          <p className="lede reveal delay-3">
            My focus sits at the intersection of <em>reels</em>,{' '}
            <em>carousels</em> and WordPress-ready content — built for
            awareness, reach, and real audience education. I care about the
            small details that turn a passive scroll into a save, a share, a
            follow.
          </p>
          <div className="chips reveal delay-3">
            {CHIPS.map((chip) => (
              <span className="chip" key={chip}>
                <span className="d" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

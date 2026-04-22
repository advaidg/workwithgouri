import './About.css';

const CHIPS = [
  'Social Media Content',
  'SEO',
  'Quality Checking',
  'WordPress',
  'Reels Creation',
  'Carousels & Creatives',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-img reveal">
          <div className="ph">
            <span>Workspace lifestyle — 4:5</span>
          </div>
          <div className="badge">Since '24</div>
        </div>
        <div>
          <span className="eyebrow reveal">About · 01</span>
          <h2 className="h2 reveal delay-1">
            Crafting scrolls
            <br />
            that{' '}
            <span className="italic" style={{ color: 'var(--coral)' }}>
              actually stop
            </span>
            .
          </h2>
          <p className="lede reveal delay-2">
            Hi, I&apos;m <strong>Gouri</strong> — a digital marketer and content
            creator trained at <strong>Digital Scholar</strong>, based in Kochi.
            I specialize in social media content, SEO, and quality checking —
            creating engaging and performance-driven content for brands.
          </p>
          <p className="lede reveal delay-3">
            My work sits at the intersection of reels, carousels and
            website-ready content — built for awareness, reach, and audience
            education. I care about the small details that turn a passive scroll
            into a real follow, save or click.
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

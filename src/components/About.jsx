import './About.css';

const CHIPS = [
  'Reels Creation',
  'Social Media Creatives',
  'Trend-based Content',
  'Short-form Video',
  'Carousel Design',
  'Meta Ads',
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
            Hi, I&apos;m <strong>Gouri</strong> — a content creator and digital
            marketer focused on creating engaging and visually appealing social
            media content. I&apos;ve completed my digital marketing training
            from <strong>Digital Scholar</strong>, with skills in SEO,
            WordPress, and Meta Ads.
          </p>
          <p className="lede reveal delay-3">
            I specialize in reels, creatives, and trend-based content that helps
            brands connect better with their audience. My goal is to create
            content that grabs attention, builds consistency, and delivers real
            engagement.
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

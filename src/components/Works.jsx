import './Works.css';

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="works-head">
        <div>
          <span className="eyebrow reveal">Selected work · 03</span>
          <h2 className="h2 reveal delay-1" style={{ marginTop: 12 }}>
            My
            <br />
            <span className="italic" style={{ color: 'var(--coral)' }}>
              works.
            </span>
          </h2>
        </div>
        <p
          className="reveal delay-2"
          style={{ maxWidth: '40ch', color: 'var(--ink-soft)' }}
        >
          A small peek into reels, carousels and campaigns. Hover each card for
          context. Real posts coming soon.
        </p>
      </div>

      <div className="works-grid">
        {/* Featured — Product Showcase reel */}
        <div className="work w-featured reveal" data-hover>
          <div className="copy">
            <span
              className="chip-top"
              style={{
                position: 'relative',
                top: 0,
                left: 0,
                marginBottom: 18,
                display: 'inline-block',
              }}
            >
              Featured · Reel
            </span>
            <h4>Product Showcase — a reel that hit 425K.</h4>
            <p>
              Worked with a brand to turn a simple product into a scroll-stopper
              — trend-based reel, clean creative, storytelling-first. The kind
              of content that feels relatable and converts.
            </p>
            <div className="stats">
              <div className="s">
                <b>425K</b>
                <span>Views</span>
              </div>
              <div className="s">
                <b>—</b>
                <span>Likes</span>
              </div>
              <div className="s">
                <b>—</b>
                <span>Engagement</span>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="screen">
              <div className="reel">
                <div>
                  when the brief says
                  <br />
                  <em style={{ color: 'var(--butter)' }}>"just go viral"</em>
                </div>
                <div>
                  but your hook is
                  <br />
                  <em style={{ color: 'var(--lime)' }}>actually good</em>
                </div>
                <div>
                  POV: you finally
                  <br />
                  nailed the transition
                </div>
                <div>
                  and the algorithm
                  <br />
                  says <em>thank you</em>
                </div>
              </div>
              <div className="ui">
                <div className="prog" />
                <div className="right-stack">
                  <div className="ic">♥</div>
                  <div className="ic">💬</div>
                  <div className="ic">↗</div>
                  <div className="ic">⋯</div>
                </div>
                <div className="handle">@gouri.creates</div>
                <div className="cap">
                  behind every "viral" reel is a spreadsheet and three rewrites
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work w-1 reveal delay-1" data-hover>
          <div className="cover">
            <h3>
              "Work Ethics —<br />
              the <em>key</em> to<br />
              professional<br />
              success"
            </h3>
          </div>
          <span className="chip-top">Carousel · 6 slides</span>
          <div className="info">
            <h4>Professional habits that compound</h4>
            <div className="tag">Educational · Saved &amp; shared</div>
          </div>
        </div>

        <div className="work w-2 reveal delay-2" data-hover>
          <div className="cover">
            <span className="topcap">Awareness · Health</span>
            <h3>
              Got <em>Neck</em>
              <br />
              <span>Pain?</span>
            </h3>
            <div className="btm">
              A carousel explaining posture, symptoms and fixes in 7 visual
              frames.
            </div>
          </div>
          <span className="chip-top">Carousel · 7 slides</span>
        </div>

        <div className="work w-3 reveal" data-hover>
          <h4>
            The Loop — word
            <br />
            search activation
          </h4>
          <div className="grid4">
            <span>T</span>
            <span>R</span>
            <span className="hit">E</span>
            <span className="hit">N</span>
            <span className="hit">D</span>
            <span>S</span>
            <span>W</span>
            <span>V</span>
            <span className="hit">R</span>
            <span>E</span>
            <span>A</span>
            <span>C</span>
            <span>H</span>
            <span>O</span>
            <span>I</span>
            <span className="hit">E</span>
            <span>H</span>
            <span>O</span>
            <span>O</span>
            <span className="hit">K</span>
            <span>R</span>
            <span>R</span>
            <span className="hit">E</span>
            <span className="hit">E</span>
            <span className="hit">L</span>
            <span className="hit">S</span>
            <span>F</span>
            <span>D</span>
            <span>A</span>
            <span>L</span>
            <span>S</span>
            <span>E</span>
            <span>B</span>
            <span>K</span>
            <span>S</span>
            <span>L</span>
            <span>S</span>
            <span>A</span>
            <span>V</span>
            <span>E</span>
            <span>D</span>
            <span>L</span>
          </div>
          <div className="cap">Interactive Post · Engagement win</div>
        </div>

        <div className="work w-4 reveal delay-1" data-hover>
          <div className="cover">
            <span>Lifestyle · Reel</span>
            <h4>
              "I quit my
              <br />
              headspace"
            </h4>
          </div>
          <span className="chip-top">Reel · 00:42</span>
        </div>

        <div className="work w-5 reveal delay-2" data-hover>
          <div className="cover">
            <div>
              <span className="serif-date italic">editorial, 2025</span>
              <h4 style={{ marginTop: 10 }}>
                A quiet morning
                <br />
                with <em>oat milk</em>
                <br />
                and a new brief.
              </h4>
            </div>
            <span className="serif-date italic" style={{ opacity: 0.6 }}>
              lifestyle · 09
            </span>
          </div>
          <span className="chip-top">Lifestyle · Post</span>
        </div>
      </div>
    </section>
  );
}

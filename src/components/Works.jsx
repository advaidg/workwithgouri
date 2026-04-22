import { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import './Works.css';

const WORKS = [
  {
    id: 'health',
    kicker: 'Carousel · Healthcare · 5 slides',
    title: 'How to fix your posture — Ekyam Clinic',
    description:
      'An educational carousel breaking down posture, why it matters, and simple daily fixes. Built for awareness and saves.',
    cover: '/works/health-1.jpg',
    variant: 'w-editorial',
    slides: [
      '/works/health-1.jpg',
      '/works/health-2.jpg',
      '/works/health-3.jpg',
      '/works/health-4.jpg',
      '/works/health-5.jpg',
    ],
    type: 'carousel',
  },
  {
    id: 'reel-sinus',
    kicker: 'Reel · 00:30',
    title: '5 signs you\u2019re ignoring a sinus problem',
    description:
      'A 30-second awareness reel for Ekyam Clinic — hook-first, typography-led, built to educate and save.',
    cover: '/works/reel-3.jpg',
    poster: '/works/reel-3.jpg',
    variant: 'w-reel',
    slides: ['/works/reel-3.mp4'],
    type: 'video',
  },
  {
    id: 'myth',
    kicker: 'Carousel · Healthcare · 6 slides',
    title: 'Myth & facts of sports injury',
    description:
      'A side-by-side myth vs fact carousel for Ekyam Clinic. Clean editorial colour blocking, built for swipes and shares.',
    cover: '/works/myth-1.jpg',
    variant: 'w-dark',
    slides: [
      '/works/myth-1.jpg',
      '/works/myth-2.jpg',
      '/works/myth-3.jpg',
      '/works/myth-4.jpg',
      '/works/myth-5.jpg',
      '/works/myth-6.jpg',
    ],
    type: 'carousel',
  },
  {
    id: 'baby',
    kicker: 'Poster · Healthcare',
    title: 'Is your baby growing well? — Mother & Child',
    description:
      'Awareness poster on infant weight milestones — warm palette, editorial icons, gentle storytelling.',
    cover: '/works/baby-growth.jpg',
    variant: 'w-soft',
    slides: ['/works/baby-growth.jpg'],
    type: 'image',
  },
  {
    id: 'reel-neck',
    kicker: 'Reel · 00:05',
    title: 'Neck pain? Put down the phone.',
    description:
      'A playful 5-second loop for Ekyam Clinic — illustrated, punchy, and instantly relatable.',
    cover: '/works/reel-1.jpg',
    poster: '/works/reel-1.jpg',
    variant: 'w-reel-s',
    slides: ['/works/reel-1.mp4'],
    type: 'video',
  },
  {
    id: 'casa',
    kicker: 'Poster · Real Estate',
    title: 'Casa Tudor — Casa Grante',
    description:
      'A premium launch poster for a 3 BHK luxury villa — strong hierarchy, price anchor, clean CTA.',
    cover: '/works/casa-tudor.jpg',
    variant: 'w-wide',
    slides: ['/works/casa-tudor.jpg'],
    type: 'image',
  },
  {
    id: 'reel-carpal',
    kicker: 'Reel · 00:25',
    title: 'Carpal Tunnel Syndrome — Ekyam Clinic',
    description:
      'An editorial 25-second health reel: large serif type, calm palette, clinical credibility.',
    cover: '/works/reel-2.jpg',
    poster: '/works/reel-2.jpg',
    variant: 'w-reel',
    slides: ['/works/reel-2.mp4'],
    type: 'video',
  },
  {
    id: 'ethics',
    kicker: 'Carousel · Career',
    title: 'Work Ethics — Jijivisha Global',
    description:
      'A 5-principle carousel cover — tactile paper texture, anchored eyebrow, clear promise for the swipe.',
    cover: '/works/work-ethics.jpg',
    variant: 'w-square',
    slides: ['/works/work-ethics.jpg'],
    type: 'image',
  },
  {
    id: 'word',
    kicker: 'Interactive Post · Retail',
    title: 'Word search activation — 1st Step',
    description:
      'A puzzle post that turns product discovery into play — longer dwell time, higher saves.',
    cover: '/works/word-search.jpg',
    variant: 'w-square',
    slides: ['/works/word-search.jpg'],
    type: 'image',
  },
  {
    id: 'test',
    kicker: 'Story · Retail',
    title: 'Testimonial story — 1st Step',
    description:
      'A soft, warm testimonial story — emphasis on trust and quality, native to the Instagram story format.',
    cover: '/works/testimonial.jpg',
    variant: 'w-tall',
    slides: ['/works/testimonial.jpg'],
    type: 'image',
  },
];

export default function Works() {
  const [active, setActive] = useState(null);

  return (
    <section className="works" id="works">
      <div className="works-head">
        <div>
          <span className="eyebrow reveal">Selected work · 03</span>
          <h2 className="h2 reveal delay-1" style={{ marginTop: 12 }}>
            Selected
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
          A peek into reels, carousels and posters for Ekyam Clinic, Mother
          &amp; Child, Casa Grante, Jijivisha Global and 1st Step. Tap a card to
          open.
        </p>
      </div>

      <div className="works-grid">
        {WORKS.map((work) => (
          <button
            key={work.id}
            className={`work ${work.variant}`}
            onClick={() => setActive(work)}
            data-hover
            aria-label={`Open ${work.title}`}
          >
            <div className="work-media">
              <img src={work.cover} alt={work.title} loading="lazy" />
              {work.type === 'video' && (
                <span className="play-badge" aria-hidden="true">
                  ▶
                </span>
              )}
              <span className="work-chip">{work.kicker}</span>
            </div>
            <div className="work-info">
              <h4>{work.title}</h4>
              <span className="open">View project&nbsp;↗</span>
            </div>
          </button>
        ))}
      </div>

      <Lightbox work={active} onClose={() => setActive(null)} />
    </section>
  );
}

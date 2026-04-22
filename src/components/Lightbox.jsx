import { useEffect, useState, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ work, onClose }) {
  const [index, setIndex] = useState(0);

  const total = work?.slides?.length || 0;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    setIndex(0);
  }, [work]);

  useEffect(() => {
    if (!work) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [work, onClose, prev, next]);

  if (!work) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={work.title}>
      <button
        className="lb-close"
        onClick={onClose}
        aria-label="Close"
        data-hover
      >
        ✕
      </button>

      <div className="lb-stage">
        {total > 1 && (
          <button
            className="lb-nav prev"
            onClick={prev}
            aria-label="Previous"
            data-hover
          >
            ←
          </button>
        )}

        <div className="lb-frame">
          {work.type === 'video' ? (
            <video
              key={work.slides[0]}
              src={work.slides[0]}
              poster={work.poster}
              controls
              autoPlay
              playsInline
              loop
            />
          ) : (
            <img
              src={work.slides[index]}
              alt={`${work.title} — slide ${index + 1}`}
            />
          )}
        </div>

        {total > 1 && (
          <button
            className="lb-nav next"
            onClick={next}
            aria-label="Next"
            data-hover
          >
            →
          </button>
        )}
      </div>

      <div className="lb-meta">
        <div className="lb-meta-left">
          <span className="lb-kicker">{work.kicker}</span>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
        </div>
        {total > 1 && (
          <div className="lb-counter">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span className="divider">/</span>
            <span>{String(total).padStart(2, '0')}</span>
          </div>
        )}
      </div>

      <button
        className="lb-backdrop"
        onClick={onClose}
        aria-label="Close lightbox"
        tabIndex={-1}
      />
    </div>
  );
}

import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRemoved(true);
      return;
    }
    const doneTimer = setTimeout(() => setDone(true), 550);
    const removeTimer = setTimeout(() => setRemoved(true), 1100);
    return () => {
      clearTimeout(doneTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loader${done ? ' done' : ''}`} aria-hidden="true">
      <span className="loader-name">
        Gouri<span style={{ color: 'var(--coral)' }}>.</span>
      </span>
    </div>
  );
}

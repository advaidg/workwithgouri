import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.random() * 12 + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setDone(true), 350);
        setTimeout(() => setRemoved(true), 1500);
        return;
      }
      setProgress(n);
    }, 80);
    return () => clearInterval(id);
  }, []);

  if (removed) return null;

  return (
    <div className={`loader${done ? ' done' : ''}`}>
      <div className="loader-inner">
        <span className="loader-label">Portfolio // 2026</span>
        <span className="loader-name">
          Gouri<span style={{ color: 'var(--coral)' }}>.</span>
        </span>
        <span className="loader-count">
          {String(Math.floor(progress)).padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import './Nav.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Works' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [clock, setClock] = useState('KOCHI · 00:00 IST');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: false,
      });
      setClock(`KOCHI · ${time} IST`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        if (y > 120) {
          setHidden(y > lastY);
        } else {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`top${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}
    >
      <a href="#top" className="mark" aria-label="Gouri Gireesan — home">
        <b>GG</b>
        <span className="italic">&nbsp;/ creator</span>
      </a>
      <ul>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="time">{clock}</div>
    </nav>
  );
}

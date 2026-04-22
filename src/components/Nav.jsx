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

  return (
    <nav className="top">
      <div className="mark">
        <b>GG</b>&nbsp;<span className="italic">/ creator</span>
      </div>
      <ul>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} data-hover>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="time">{clock}</div>
    </nav>
  );
}

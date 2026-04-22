import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    els.forEach((el) => io.observe(el));

    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        el.classList.add('in');
      });
    }, 3500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}

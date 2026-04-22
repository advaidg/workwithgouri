import { useEffect } from 'react';
import Loader from './components/Loader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Works from './components/Works.jsx';
import Tools from './components/Tools.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 40,
        behavior: 'smooth',
      });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <div className="noise" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Works />
      <Tools />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

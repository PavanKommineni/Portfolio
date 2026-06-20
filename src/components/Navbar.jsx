import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import './Navbar.css';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-bracket">&lt;</span>
          AR
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <button className="navbar__link" onClick={() => scrollTo(link)}>
                <span className="navbar__link-num">0{i + 1}.</span> {link}
              </button>
            </li>
          ))}
          <li>
            <a className="navbar__resume" href={portfolioData.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

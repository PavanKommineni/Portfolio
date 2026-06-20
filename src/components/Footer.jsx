import React from 'react';
import { portfolioData } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          Designed &amp; built by {portfolioData.name} · {new Date().getFullYear()}
        </p>
        <div className="footer__links">
          <a href={portfolioData.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${portfolioData.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

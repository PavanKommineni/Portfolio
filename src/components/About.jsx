import React from 'react';
import { portfolioData } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-label">01. About Me</p>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p className="about__bio">{portfolioData.about}</p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">3</span>
              <span className="about__stat-label">Projects Built</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">7</span>
              <span className="about__stat-label">Months Industry Exp.</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">2</span>
              <span className="about__stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="about__visual">
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="80" r="40" fill="#1E1E2E"/>
                <path d="M20 180 Q40 130 100 130 Q160 130 180 180" fill="#1E1E2E"/>
                <circle cx="100" cy="80" r="38" fill="#2A2A3E"/>
                <circle cx="100" cy="72" r="22" fill="#3D3D5C"/>
                <path d="M60 140 Q65 125 100 125 Q135 125 140 140" fill="#3D3D5C"/>
                {/* code symbol overlay */}
                <text x="74" y="78" fill="#6C63FF" fontSize="20" fontFamily="monospace" fontWeight="bold">{"</>"}</text>
              </svg>
            </div>
            <div className="about__avatar-glow"></div>
          </div>

          {/* floating tech badges */}
          <div className="about__badge about__badge--1">Java</div>
          <div className="about__badge about__badge--2">Spring Boot</div>
          <div className="about__badge about__badge--3">MySQL</div>
          <div className="about__badge about__badge--4">REST API</div>
        </div>
      </div>
    </section>
  );
}

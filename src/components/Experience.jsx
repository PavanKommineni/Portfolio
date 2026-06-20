import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = portfolioData.experience;

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="section-label">03. Experience</p>
        <h2 className="section-title">Where I've <span>Worked</span></h2>

        <div className="exp__layout">
          {/* Tab list */}
          <div className="exp__tabs">
            {exp.map((e, i) => (
              <button
                key={e.company}
                className={`exp__tab ${active === i ? 'exp__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                {e.company}
              </button>
            ))}
            <div
              className="exp__tab-indicator"
              style={{ transform: `translateY(${active * 52}px)` }}
            />
          </div>

          {/* Panel */}
          <div className="exp__panel">
            <div className="exp__header">
              <h3 className="exp__role">
                {exp[active].role}{' '}
                <span className="exp__company">@ {exp[active].company}</span>
              </h3>
              <p className="exp__period">{exp[active].period}</p>
            </div>
            <p className="exp__desc">{exp[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

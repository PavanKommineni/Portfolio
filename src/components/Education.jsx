import React from 'react';
import { portfolioData } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <p className="section-label">04. Education</p>
        <h2 className="section-title">Academic <span>Background</span></h2>

        <div className="edu__timeline">
          {portfolioData.education.map((e, i) => (
            <div className="edu__item" key={e.school}>
              <div className="edu__marker">
                <span className="edu__dot" />
                {i !== portfolioData.education.length - 1 && <span className="edu__line" />}
              </div>
              <div className="edu__content">
                <div className="edu__top">
                  <h3 className="edu__school">{e.school}</h3>
                  <span className="edu__period">{e.period}</span>
                </div>
                <p className="edu__degree">{e.degree}</p>
                <div className="edu__meta">
                  <span>{e.location}</span>
                  <span className="edu__score">{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {portfolioData.certifications?.length > 0 && (
          <div className="edu__certs">
            <h3 className="edu__certs-title">Certifications</h3>
            <ul className="edu__certs-list">
              {portfolioData.certifications.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

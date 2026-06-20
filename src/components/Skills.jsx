import React from 'react';
import { portfolioData } from '../data/portfolio';
import './Skills.css';

const ICONS = {
  'Java': '#F89820', 'Core Java': '#F89820', 'REST API': '#6C63FF',
  'React': '#61DAFB', 'TypeScript': '#3178C6',
  'Spring Boot': '#6DB33F', 'Spring Security': '#6DB33F', 'Spring MVC': '#6DB33F', 'Hibernate': '#BCA690', 'JDBC': '#4479A1',
  'JUnit': '#25A162', 'Mockito': '#78C257', 'Postman': '#FF6C37', 'Swagger': '#85EA2D', 'Maven': '#C71A36', 'Gradle': '#02303A',
  'MySQL': '#4479A1', 'MongoDB': '#47A248', 'Apache Tomcat': '#F8DC75', 'Git/GitHub': '#fff',
};

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-label">02. Skills</p>
        <h2 className="section-title">Tech <span>Stack</span></h2>

        <div className="skills__grid">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category} className="skills__card">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {items.map(skill => (
                  <li key={skill} className="skills__item">
                    <span className="skills__dot" style={{ background: ICONS[skill] || 'var(--accent)' }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__orbit">
          <div className="skills__orbit-label">POC knowledge / exploring</div>
          <div className="skills__tags">
            {portfolioData.exploring.map(tag => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <p className="section-label" style={{ textAlign: 'center' }}>06. What's Next?</p>
        <h2 className="contact__title">Let's Build Something</h2>
        <p className="contact__sub">
          I'm currently open to new opportunities and interesting collaborations.
          Whether you have a question, a project in mind, or just want to say hi — my inbox is open.
        </p>

        <div className="contact__actions">
          <a className="contact__btn" href={`mailto:${portfolioData.email}`}>
            Say Hello
          </a>
          <button className="contact__copy" onClick={copyEmail}>
            {copied ? 'Copied!' : portfolioData.email}
          </button>
        </div>
      </div>
    </section>
  );
}

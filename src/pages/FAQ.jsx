import React, { useEffect } from 'react';
import { generateFAQSchema, insertSchemaTag } from '../utils/schemas';

const FAQS = [
  {
    question: 'What type of work do you do?',
    answer: 'I build responsive full-stack web applications with React, Node.js, MongoDB, and Python, with a focus on clean UI and practical product delivery.',
  },
  {
    question: 'Are you available for freelance or full-time roles?',
    answer: 'Yes. I am open to full-time opportunities, freelance projects, and collaborations that involve modern web development work.',
  },
  {
    question: 'What projects are featured in your portfolio?',
    answer: 'My portfolio includes real-world projects such as Smart Bus, Sri & Sai Fashion, MediMart, a Netflix clone, and an internal ticket booking system.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can reach me through the contact section on the site or by email at naveenkumarsubramani2603@gmail.com.',
  },
];

const FAQ = () => {
  useEffect(() => {
    insertSchemaTag(generateFAQSchema(FAQS), 'faq-schema');
  }, []);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Quick answers about the kind of work I do, what I build, and how to get in touch.
          </p>
        </div>

        <div className="faq-grid">
          {FAQS.map((faq) => (
            <article key={faq.question} className="card faq-card">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
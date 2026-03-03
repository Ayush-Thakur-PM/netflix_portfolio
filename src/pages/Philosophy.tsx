import React from 'react';
import './Philosophy.css';
import {
  FaRocket,
  FaUsers,
  FaCogs,
  FaChartBar,
  FaLayerGroup,
  FaSearch,
} from 'react-icons/fa';

const capabilityCards = [
  {
    icon: <FaRocket />,
    title: 'Growth Catalyst',
    description:
      'Take existing products from good to exceptional with strategic feature development that drives measurable growth.',
  },
  {
    icon: <FaUsers />,
    title: 'Customer-Driven',
    description:
      'Sales background ensures every feature addresses real user pain points — not assumptions.',
  },
  {
    icon: <FaCogs />,
    title: 'System Enhancer',
    description:
      'Optimize existing architectures and build scalable improvements that compound over time.',
  },
  {
    icon: <FaChartBar />,
    title: 'Impact Measurer',
    description:
      'Track feature performance and iterate based on data-driven insights, not intuition alone.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Scale Expert',
    description:
      'Experience taking products from early stage to enterprise readiness across proptech and edtech.',
  },
  {
    icon: <FaSearch />,
    title: 'Problem Identifier',
    description:
      'Spot bottlenecks and build solutions that unlock next-level growth before they become blockers.',
  },
];

const Philosophy: React.FC = () => {
  return (
    <div className="philosophy-container">

      {/* Section 1: Product Methodology */}
      <section className="philosophy-methodology">
        <h2 className="philosophy-section-label">Product Methodology</h2>
        <blockquote className="philosophy-quote">
          I approach product challenges through systematic analysis, user-centric design, and
          data-driven decision making to deliver measurable business outcomes.
        </blockquote>
      </section>

      {/* Section 2: Ready for the Next Challenge */}
      <section className="philosophy-growth">
        <h2 className="philosophy-heading">Ready for the Next Challenge</h2>
        <p className="philosophy-subheading">
          I've mastered the art of building from scratch. Now I'm excited to join a growing startup
          where I can scale existing solutions and build the features that drive exponential growth.
        </p>

        <div className="capability-cards-grid">
          {capabilityCards.map((card, index) => (
            <div
              key={index}
              className="capability-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="capability-icon">{card.icon}</div>
              <h3 className="capability-title">{card.title}</h3>
              <p className="capability-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Scaling to New Heights */}
      <section className="philosophy-closing">
        <h3 className="philosophy-closing-title">Scaling to New Heights</h3>
        <p className="philosophy-closing-text">
          I'm looking for that sweet spot — a startup with proven product-market fit that needs
          someone to build the features and systems that will take them from millions to hundreds
          of millions in revenue.
        </p>
      </section>

    </div>
  );
};

export default Philosophy;

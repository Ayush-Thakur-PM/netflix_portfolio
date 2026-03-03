import React from 'react';
import './WhatExcitesMe.css';
import { FaFlagCheckered, FaFutbol, FaHeart, FaPaw } from 'react-icons/fa';

const interestCards = [
  {
    icon: <FaFlagCheckered />,
    title: 'Formula 1',
    description:
      'The strategy, the speed, the drama. Racing distills decision-making under pressure — which is exactly what great product work feels like.',
  },
  {
    icon: <FaFutbol />,
    title: 'Football',
    description:
      'Tactics, transfers, or just celebrating great goals. I love the strategic side of the beautiful game.',
  },
  {
    icon: <FaHeart />,
    title: 'Social Impact',
    description:
      'Building technology solutions that create meaningful change in communities — from animal welfare to educational initiatives.',
  },
  {
    icon: <FaPaw />,
    title: 'Animal Welfare',
    description:
      'Volunteering at Second Chance Sanctuary, Thangam. Every creature deserves a second chance.',
  },
];

const WhatExcitesMe: React.FC = () => {
  return (
    <div className="excited-container">
      <section className="excited-intro">
        <h1 className="excited-title">What Gets Me Excited</h1>
        <p className="excited-bio">
          I'm passionate about building products that solve real problems and creating positive
          social impact. When I'm not strategizing, you'll find me watching Formula 1 races,
          discussing football tactics, or volunteering at Second Chance Sanctuary, Thangam 🐾
        </p>
      </section>

      <section className="excited-interests">
        <div className="interest-cards-grid">
          {interestCards.map((card, index) => (
            <div
              key={index}
              className="interest-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="interest-icon">{card.icon}</div>
              <h3 className="interest-title">{card.title}</h3>
              <p className="interest-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatExcitesMe;

import React from 'react';
import './Recommendations.css';
import { recommendations } from '../data/recommendations';

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Recommendations</h2>
      <div className="recommendations-grid">
        {recommendations.map((rec, index) => (
          <article key={index} className="recommendation-card">
            <header className="recommendation-header">
              <div className="recommendation-avatar-wrapper">
                {rec.avatar ? (
                  <img
                    src={rec.avatar}
                    alt={rec.name}
                    className="recommendation-avatar"
                  />
                ) : (
                  <div className="recommendation-avatar recommendation-avatar--fallback">
                    {rec.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="recommendation-header-text">
                <h3 className="recommendation-name">{rec.name}</h3>
                <p className="recommendation-title">{rec.title}</p>
                <p className="recommendation-meta">
                  {rec.relationship} · {rec.date}
                </p>
              </div>
            </header>

            <p className="recommendation-text">“{rec.text}”</p>

            {rec.linkedinUrl && (
              <a
                href={rec.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="recommendation-link"
              >
                View on LinkedIn
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;

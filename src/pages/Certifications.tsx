import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    async function fetchCertifications() {
      try {
        const data = await getCertifications();
        setCertifications(data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="certifications-container">
        <div className="certifications-grid">
          {[1, 2].map((i) => (
            <div key={i} className="certification-card-skeleton" style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}>
              <div className="skeleton-icon"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          cert.link ? (
            <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
              <div className="certification-link animated-icon">
                <FaExternalLinkAlt />
              </div>
            </a>
          ) : (
            <div key={index} className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Certifications;

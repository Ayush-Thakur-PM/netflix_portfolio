import React, { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';
import ivyHomesLogo from '../images/ivy-homes-logo.png';
import truvaLogo from '../images/truva-logo.png';
import byjusLogo from '../images/byjus-logo.svg';
import iitMadrasLogo from '../images/iit-madras-logo.png';
import rgpvLogo from '../images/rgpv-logo.png';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // We keep the timeline data shape simple and map company-specific
  // visuals (logo + website link) here so we do not have to change
  // the CMS schema just to add branding.
  const companyMeta: Record<
    'truva' | 'ivyHomes' | 'byjus',
    { logoSrc: string; url?: string; displayName: string }
  > = {
    truva: {
      logoSrc: truvaLogo,
      url: 'https://www.truva.co.in/',
      displayName: 'Truva',
    },
    ivyHomes: {
      logoSrc: ivyHomesLogo,
      url: 'https://www.ivy.homes/',
      displayName: 'Ivy Homes',
    },
    byjus: {
      // We show the Byju's logo for visual context, but do not attach
      // a redirect URL so the card behaves like a normal, non-clickable entry.
      logoSrc: byjusLogo,
      displayName: "Byju's",
    },
  };

  const educationMeta = {
    iitMadras: {
      logoSrc: iitMadrasLogo,
      alt: 'IIT Madras logo',
    },
    rgpv: {
      logoSrc: rgpvLogo,
      alt: 'RGPV University logo',
    },
  } as const;

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  // Animate cards when they enter the viewport so the timeline
  // feels more dynamic as the user scrolls.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [timeLineData]);

  // Grow the central timeline line based on scroll progress.
  useEffect(() => {
    const handleScroll = () => {
      const timelineEl = timelineRef.current;
      if (!timelineEl) return;

      const rect = timelineEl.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // How far the middle of the viewport has travelled through the timeline.
      const totalHeight = rect.height + windowHeight;
      const distance =
        windowHeight - rect.top; // when top hits middle of screen this becomes positive
      const rawProgress = distance / totalHeight;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      timelineEl.style.setProperty(
        '--timeline-progress',
        clampedProgress.toString()
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);


  if (!timeLineData) return <div>Loading...</div>;

  // Split the timeline into work and education so they can be rendered
  // in clearly distinct sections rather than as a mixed list.
  const workItems = timeLineData.filter((item) => item.timelineType === 'work');
  const educationItems = timeLineData.filter((item) => item.timelineType === 'education');

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience</h2>
      </div>
      {/* Wrapper div holds the ref so we can measure scroll progress; VerticalTimeline doesn't forward refs to a DOM node. */}
      <div ref={timelineRef}>
        <VerticalTimeline>
        {workItems.map((item, index) => {
          const nameLower = item.name.toLowerCase();
          const companyKey = nameLower.includes('truva')
            ? 'truva'
            : nameLower.includes('ivy')
            ? 'ivyHomes'
            : nameLower.includes('byju')
            ? 'byjus'
            : null;
          const meta = companyKey ? companyMeta[companyKey] : undefined;

          const isCurrent =
            nameLower.includes('pokus') ||
            item.dateRange.toLowerCase().includes('present');

          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(240, 240, 240)' }}
              date={item.dateRange}
              dateClassName="timeline-date"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <div
                className="timeline-card timeline-card--work"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                {meta ? (
                  meta.url ? (
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-company-link"
                    >
                      {meta.logoSrc && (
                        <img
                          src={meta.logoSrc}
                          alt={`${meta.displayName} logo`}
                          className="timeline-company-logo"
                        />
                      )}
                      <div className="timeline-card-header-text">
                        <h3 className="vertical-timeline-element-title">
                          {item.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {meta.displayName}
                        </h4>
                      </div>
                    </a>
                  ) : (
                    <div className="timeline-company-link">
                      {meta.logoSrc && (
                        <img
                          src={meta.logoSrc}
                          alt={`${meta.displayName} logo`}
                          className="timeline-company-logo"
                        />
                      )}
                      <div className="timeline-card-header-text">
                        <h3 className="vertical-timeline-element-title">
                          {item.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {meta.displayName}
                        </h4>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="timeline-card-header">
                    <div className="timeline-card-header-text">
                      <h3 className="vertical-timeline-element-title">
                        {item.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                )}

                {item.techStack && (
                  <p className="vertical-timeline-element-tech">
                    🔧 {item.techStack}
                  </p>
                )}
                {isCurrent && (
                  <span className="timeline-present-pill">Present</span>
                )}
                {Array.isArray(item.summaryPoints) &&
                item.summaryPoints.length > 0 ? (
                  <ul className="timeline-summary-list">
                    {item.summaryPoints.map((point, i) => (
                      <li key={i} className="timeline-summary-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.summaryPoints}</p>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>

      {/* Education section — rendered as clean horizontal cards below the work timeline */}
      <div className="education-section">
        <h2 className="education-section-title">🎓 Education</h2>
        <div className="education-cards">
          {educationItems.map((item, index) => {
            const nameLower = item.name.toLowerCase();
            const eduLogo = nameLower.includes('iit madras')
              ? educationMeta.iitMadras
              : nameLower.includes('rgpv')
              ? educationMeta.rgpv
              : null;

            return (
              <div
                key={index}
                className="education-card"
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
              >
                {eduLogo && (
                  <img
                    src={eduLogo.logoSrc}
                    alt={eduLogo.alt}
                    className="education-card-logo"
                  />
                )}
                <div className="education-card-text">
                  <h3 className="education-card-institution">{item.name}</h3>
                  <p className="education-card-degree">{item.title}</p>
                  <span className="education-card-date">{item.dateRange}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;

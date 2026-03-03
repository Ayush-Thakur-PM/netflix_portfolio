import { TimelineItem } from '../types';

/**
 * Static work experience and education timeline from resume.
 * Ordered most recent first. Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 */
export const staticTimeline: TimelineItem[] = [
  // Work – most recent first
  {
    timelineType: 'work',
    name: 'Pokus.ai',
    title: 'Venture Building Experience',
    dateRange: 'July 25 - Present',
    techStack: 'Letta, Mem0, Langchain, AI-led product',
    summaryPoints: [
      'Joined a 3-person team starting from raw ideas.',
      'Explored multiple 0→1 bets across AI and consumer problems.',
      'Built a memory-driven AI system using Letta + Mem0 + Langchain.',
      'Launched a concierge product through manual ops first.',
      'Reached ~50 paying users with early pull.',
      'Built workflows to keep daily operations reliable.',
      'Helped shape the product story during a $3M fundraise.',
    ],
  },
  {
    timelineType: 'work',
    name: 'Truva',
    title: 'Product Manager',
    dateRange: 'October 24 - July 25',
    techStack: 'Product strategy, GTM, internal tools',
    summaryPoints: [
      'Built the digital journey for homeowners selling properties.',
      'This flow grew into ~40% of the business.',
      'Simplified how sellers understood property offers.',
      'Built lead prioritization for sales teams.',
      'Built tools for faster property visits and inspections.',
      'Worked closely with ops teams to remove bottlenecks.',
    ],
  },
  {
    timelineType: 'work',
    name: 'Ivy Homes, Bangalore (YC W21)',
    title: 'Associate Product Manager',
    dateRange: 'March 23 - October 24',
    techStack: 'Proptech, AI pricing engine, mobile app, Zoho',
    summaryPoints: [
      'Worked across product areas in a small early team.',
      'Built a partner app used daily by brokers.',
      'Automated property pricing workflows.',
      'Built tools for better property visits.',
      'Connected sales and operations workflows.',
      'Improved property discovery on the website.',
    ],
  },
  {
    timelineType: 'work',
    name: 'Byjus (Think & Learn Pvt Ltd)',
    title: 'Program Manager',
    dateRange: 'June 20 - March 23',
    techStack: 'Sales, onboarding, CRM, regional operations',
    summaryPoints: [
      'Led sales and onboarding programs across cities.',
      'Managed teams and daily operations.',
      'Improved CRM and onboarding workflows.',
      'Learned large-scale execution on the ground.',
    ],
  },
  // Education
  {
    timelineType: 'education',
    name: 'Indian Institute of Technology, Madras (IIT Madras)',
    title: 'M.tech in Programming and Data Science',
    dateRange: '2025',
    techStack: '',
    summaryPoints: [],
  },
  {
    timelineType: 'education',
    name: 'University of Technology, RGPV',
    title: 'B.Tech in Mechanical Engineering',
    dateRange: '2016 - 2020',
    techStack: '',
    summaryPoints: [],
  },
];
import { ProfileBanner } from '../types';

/**
 * Static profile banner content from resume.
 * Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 */
export const staticProfileBanner: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'Product Manager - Growth and experience',
  profileSummary:
    'Product Manager with 5+ years of experience building and scaling 0→1 products across proptech, edtech, and consumer startups. Strong at identifying high-conviction user problems, designing GTM-led solutions, and driving growth through fast, iterative execution. Experienced in taking ideas from early discovery to real user adoption.',
  resumeLink: {
    // We point to the local PDF in public so clicking “Resume”
    // opens your resume directly in a new tab.
    url: '/Ayush%20Thakur%20Resume.pdf',
  },
  linkedinLink: 'https://www.linkedin.com/in/ayush-thakur-',
};
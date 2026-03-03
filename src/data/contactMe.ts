import { ContactMe } from '../types';

/**
 * Static contact info from resume.
 * profilePicture.url can be updated to your hosted image or left as placeholder.
 * Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 */
export const staticContactMe: ContactMe = {
  profilePicture: {
    // If empty, the ContactMe card will gracefully fall back
    // to the local avatar illustration.
    url: '',
  },
  name: 'Ayush Thakur',
  title: 'Product Manager - Growth and experience',
  summary:
    'Product Manager with 5+ years building and scaling 0→1 products across proptech, edtech, and consumer startups. Strong at identifying high-conviction user problems, designing GTM-led solutions, and driving growth through fast, iterative execution.',
  companyUniversity: 'Building products at the intersection of growth and experience',
  linkedinLink: 'https://www.linkedin.com/in/ayush-thakur',
  email: 'tayush30@gmail.com',
  phoneNumber: '9399370279',
  location: 'Bangalore, India',
};

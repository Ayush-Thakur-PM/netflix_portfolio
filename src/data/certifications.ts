import { Certification } from '../types';

/**
 * Static certifications from Lovable portfolio.
 * Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 */
export const staticCertifications: Certification[] = [
  {
    title: 'AI Product Manager',
    issuer: 'Airtribe',
    issuedDate: '2024',
    link: '',
    iconName: 'university',
  },
  {
    title: 'Advanced Product Certification',
    issuer: 'Product School',
    issuedDate: '2023',
    link: '',
    iconName: 'university',
  },
];

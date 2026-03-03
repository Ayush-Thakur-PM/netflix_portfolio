// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { Certification } from '../types';
import { staticCertifications } from '../data/certifications';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticCertifications;
  const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
  return data.allCertifications;
}

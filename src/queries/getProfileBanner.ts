// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { ProfileBanner } from '../types';
import { staticProfileBanner } from '../data/profileBanner';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticProfileBanner;
  const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
  return data.profilebanner;
}

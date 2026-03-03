// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { ContactMe } from '../types';
import { staticContactMe } from '../data/contactMe';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      location
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticContactMe;
  const data = await datoCMSClient.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
  return data.contactMe;
}

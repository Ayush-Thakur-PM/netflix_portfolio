// queries/getSkills.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { Skill } from '../types';
import { staticSkills } from '../data/skills';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticSkills;
  const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
  return data.allSkills;
}

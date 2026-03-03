// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { Project } from '../types';
import { staticProjects } from '../data/projects';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticProjects;
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}

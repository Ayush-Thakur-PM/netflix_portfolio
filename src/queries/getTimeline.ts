// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { getDatoCmsToken } from './getDatoCmsToken';
import { TimelineItem } from '../types';
import { staticTimeline } from '../data/timeline';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const useStatic =
    !getDatoCmsToken() || process.env.REACT_APP_USE_STATIC_DATA === 'true';
  if (useStatic) return staticTimeline;
  const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
  return data.allTimelines;
}

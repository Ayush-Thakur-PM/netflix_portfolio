import fenilAvatar from '../images/fenilgandhi.png';
import vandanaAvatar from '../images/vandanarajput.png';
import amanAvatar from '../images/amantibrewal.png';
import rajeshwarAvatar from '../images/rajeshwalnagal.png';
import rishabhAvatar from '../images/rishabhsaxena.png';

export interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  date: string;
  avatar?: string;
  text: string;
  linkedinUrl?: string;
}

// Note: Text snippets are placeholders – copy the exact wording
// from your LinkedIn recommendations into these fields so that
// this section matches your profile 1:1.
export const recommendations: Recommendation[] = [
  {
    name: 'Fenil Gandhi',
    title: 'FinTech | London Business School | NMIMS | PropTech | International Athlete',
    relationship: 'Worked with Ayush at Truva on different teams',
    date: '2024',
    avatar: fenilAvatar,
    text:
      'I had the pleasure of working closely with Ayush at Truva, where we collaborated on building internal tools like CRM systems and meeting schedulers. Ayush brought a rare blend of product thinking and real-world sales intuition to the table, a combination that made every brainstorming session insightful and productive. ' +
      'What stood out to me most was his deep understanding of users. With a background in sales, Ayush approaches product management with empathy and clarity. He doesn’t just build features, he solves real problems. He’s sharp, curious, and incredibly easy to work with. Any team would be lucky to have him.',
  },
  {
    name: 'Vandana Rajput',
    title: 'Lead HRBP at VML India (A WPP Company)',
    relationship: 'Worked with Ayush at Byjus on different teams',
    date: '2024',
    avatar: vandanaAvatar,
    text:
      'I had the pleasure of working with Ayush at Byjus. His exceptional leadership and strategic planning skills have significantly contributed to business outcomes. Ayush excels at driving business initiatives and fostering a collaborative team environment, resulting in improved operational efficiency and increased profitability. ' +
      'His dedication and strategic insight make him an invaluable asset to any organization.',
  },
  {
    name: 'Aman Tibrewal',
    title: 'SDE @ Ivy Homes | ex-Udaan, ex-Trell | NIT Allahabad',
    relationship: 'Worked with Ayush at Ivy Homes on the same team',
    date: '2024',
    avatar: amanAvatar,
    text:
      'I had the pleasure of working closely with Ayush at Ivy Homes, and I can’t recommend him highly enough. Ayush stands out not only for his exceptional ability to bridge the gap between technical and non-technical teams but also for his friendly and supportive approach. ' +
      'He possesses a remarkable talent for understanding and clearly explaining complex needs, which has been invaluable in ensuring smooth collaboration and successful project outcomes. ' +
      'His proactive problem-solving skills and strategic mindset have greatly contributed to the successful development and launch of Offer Product. ' +
      'His dedication, combined with his excellent communication skills and positive attitude, makes him a truly valuable asset to any team. If you have the chance to work with Ayush, I highly encourage you to take it!',
  },
  {
    name: 'Rajeshvar Nagal',
    title: 'Senior Software Engineer, Ivy Homes | IIT Roorkee',
    relationship: 'Worked with Ayush at Ivy Homes on the same team',
    date: '2024',
    avatar: rajeshwarAvatar,
    text:
      'Ayush is an exceptionally hardworking and dedicated Associate Product Manager at our company. His commitment and enthusiasm are truly remarkable, setting him apart within the team. ' +
      'As a Senior Software Engineer who has had the pleasure of working with Ayush, I can attest to his clear understanding of product management, his ability to effectively handle complex needs, and his innovative problem-solving skills. ' +
      'Ayush excels in planning, communicating effectively with all stakeholders, and contributing valuable insights that drive our projects forward. I highly recommend Ayush for his outstanding contributions and unwavering dedication.',
  },
  {
    name: 'Rishab Saxena',
    title: 'Sales Leader | Data-Driven Decision Maker | Team Manager',
    relationship: 'Worked with Ayush on the same team',
    date: '2024',
    avatar: rishabhAvatar,
    text:
      'Ayush was two months senior to me. He helped me in settling down in the new environment and is a team player and disciplined employee to have.',
  },
];


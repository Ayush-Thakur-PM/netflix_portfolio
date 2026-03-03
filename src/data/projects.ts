import { Project } from '../types';

/**
 * Static projects from Lovable portfolio.
 * Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 * Images use picsum.photos with project-specific seeds for consistency.
 */
export const staticProjects: Project[] = [
  {
    title: 'Spotify Product Teardown',
    description: 'Comprehensive product analysis focusing on user engagement, discovery algorithms, and monetization strategies',
    techUsed: 'Product Strategy, User Research, Data Analytics',
    image: { url: 'https://picsum.photos/seed/spotify/400/300' },
    outcome: 'Strategic insights on music streaming product design',
    projectType: 'Case Study',
    link: 'https://www.canva.com/design/DAGninMHkz8/nUnsFmccm7sRmp17rRdejA/edit?utm_content=DAGninMHkz8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    title: 'NoBroker Platform Study',
    description: 'Analyzed PropTech platform\'s approach to eliminating broker dependency and direct P2P transactions',
    techUsed: 'Product Strategy, Market Research, Competitive Analysis',
    image: { url: 'https://picsum.photos/seed/proptech/400/300' },
    outcome: 'Market positioning and competitive analysis insights',
    projectType: 'Case Study',
    link: 'https://www.notion.so/Expanding-NoBroker-into-Home-Services-1ffd2186d0cb8012a97cc4ea9b561491?source=copy_link',
  },
  {
    title: 'Meesho Growth Analysis',
    description: 'Examined social commerce platform\'s unique approach to reseller-driven growth and rural market penetration',
    techUsed: 'Growth Strategy, Market Research, Data Analytics',
    image: { url: 'https://picsum.photos/seed/ecommerce/400/300' },
    outcome: 'Insights on social commerce and market expansion',
    projectType: 'Case Study',
    link: 'https://www.notion.so/Meesho-Case-Study-229d2186d0cb8037816fd7ef8ebdd29d?source=copy_link',
  },
  {
    title: 'AI Pricing Engine',
    description: 'Built end-to-end AI-powered pricing system that revolutionized property valuation process',
    techUsed: 'AI/ML, Python, AWS, Product Management',
    image: { url: 'https://picsum.photos/seed/ai/400/300' },
    outcome: '90% faster valuations, improved accuracy',
    projectType: 'Product Work',
  },
];

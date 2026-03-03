import { Skill } from '../types';

/**
 * Static skills and tools from resume.
 * Used when DatoCMS token is not set or REACT_APP_USE_STATIC_DATA=true.
 * Icon keys match react-icons where available; others use fallback in Skills.tsx.
 */
export const staticSkills: Skill[] = [
  // Product / PM skills
  { name: 'Product Development', category: 'Product', description: 'End-to-end product lifecycle from discovery to launch', icon: 'FaReact' },
  { name: 'Product Roadmap', category: 'Product', description: 'Prioritization and roadmap planning', icon: 'FaReact' },
  { name: 'Product Strategy', category: 'Product', description: '0→1 strategy and GTM-led solutions', icon: 'FaReact' },
  { name: 'Agile', category: 'Product', description: 'Agile execution and delivery', icon: 'FaReact' },
  { name: 'GTM Strategy', category: 'Product', description: 'Go-to-market and growth', icon: 'FaReact' },
  { name: 'User & Market Research', category: 'Product', description: 'User research and market validation', icon: 'FaReact' },
  { name: 'Data Analytics', category: 'Product', description: 'Data-driven decision making', icon: 'FaReact' },
  { name: 'Prototyping', category: 'Product', description: 'Rapid prototyping and iteration', icon: 'FaReact' },
  // Tools
  { name: 'Jira', category: 'Tools', description: 'Project and sprint management', icon: 'FaReact' },
  { name: 'MixPanel', category: 'Tools', description: 'Product analytics', icon: 'FaReact' },
  { name: 'GA4', category: 'Tools', description: 'Web and product analytics', icon: 'FaReact' },
  { name: 'SQL', category: 'Tools', description: 'Data querying and analysis', icon: 'SiPostgresql' },
  { name: 'Notion', category: 'Tools', description: 'Documentation and collaboration', icon: 'FaReact' },
  { name: 'Figma', category: 'Tools', description: 'Design and prototyping', icon: 'FaReact' },
  { name: 'Airtable', category: 'Tools', description: 'Databases and workflows', icon: 'FaReact' },
  { name: 'Zapier', category: 'Tools', description: 'Automation and integrations', icon: 'FaReact' },
  { name: 'N8N', category: 'Tools', description: 'Workflow automation', icon: 'FaReact' },
  { name: 'Lovable', category: 'Tools', description: 'AI-assisted development', icon: 'FaReact' },
  { name: 'Cursor', category: 'Tools', description: 'AI-powered coding', icon: 'FaReact' },
  { name: 'Big Query', category: 'Tools', description: 'Data warehouse and analytics', icon: 'FaReact' },
];

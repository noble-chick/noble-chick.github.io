import { assetUrl } from '@/utils/assetUrl';

export const profile = {
  name: 'Tehreem Asad',
  tagline:
    'I build secure, well-structured web applications and am learning how to protect the data behind them.',
  education: {
    degree: 'BSc (Honours) Cyber Security',
    school: 'Lassonde School of Engineering, York University',
    graduation: 'Expected June 2028',
  },
  email: 'tehreem2697@gmail.com',
  github: 'https://github.com/noble-chick',
  linkedin: 'https://www.linkedin.com/in/tehreem-asad-18a393353/',
} as const;

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: { src: string; alt: string };
}

export const projects: Project[] = [
  {
    title: 'Weather Vault',
    description:
      'A web application that integrates the OpenWeather API and a JSON-based location vault, which stores locations to reduce repeated lookups.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'OpenWeather API', 'JSON'],
    github: 'https://github.com/noble-chick/wordvault',
    image: {
      src: assetUrl('assets/images/Page_of_my_weather_app.png'),
      alt: 'Screenshot of the Weather Vault web app',
    },
  },
  {
    title: 'Student Database System',
    description:
      'A student database project that demonstrates programming, data management, and database-related skills.',
    technologies: ['Database design', 'Data management', 'Programming'],
    github: 'https://github.com/noble-chick/Student-Database',
    image: {
      src: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Computer monitor displaying data and code',
    },
  },
  {
    title: 'Password Strength Analyzer',
    description:
      'A password-analysis tool informed by NIST SP 800-63B password guidance. It is an independent project and is not NIST-certified or officially compliant.',
    technologies: ['Password analysis', 'NIST SP 800-63B'],
    github: 'https://github.com/noble-chick/Password-Checker',
    image: {
      src: 'https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Keyboard keys spelling the word password',
    },
  },
];

export interface Experience {
  role: string;
  organization: string;
  unit?: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: 'Business Finance Co-op Student',
    organization: 'Ontario Public Service (OPS)',
    unit: 'Ministry of Public and Business Service Delivery and Procurement, Justice Technology Services (JTS)',
    period: 'September 2026 – Present',
    description:
      'Support financial processes and reporting in a technology-focused public-sector organization.',
  },
  {
    role: 'Student Engagement Volunteer',
    organization: 'York Federation of Students, RedPack',
    period: 'September 2025 – Present',
    description:
      'Support student engagement through outreach, poster distribution, care-package activities, and events.',
  },
  {
    role: 'Vice Chair, Communications',
    organization: 'York Engineering Competition (YEC)',
    period: 'July – October 2025',
    description:
      'Supported communications and outreach for an engineering competition involving approximately 150 participants.',
  },
  {
    role: 'Administrative, Database, and Data Security Assistant',
    organization: 'ICNA Relief Canada',
    period: '2024 – 2025',
    description:
      'Worked with sensitive client records, including a spreadsheet-to-database migration, appointment information, eligibility records, and administrative documentation, with an emphasis on confidentiality and careful data handling.',
  },
];

export interface SkillGroup {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: 'py' },
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'C', icon: 'c' },
      { name: 'R', icon: 'r' },
      { name: 'RISC-V Assembly' },
      { name: 'Regex', icon: 'regex' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'React', icon: 'react' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'NPM', icon: 'npm' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'SQL' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'JSON' },
      { name: 'Excel' },
      { name: 'Power BI fundamentals' },
    ],
  },
  {
    category: 'Systems & Security',
    skills: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Bash', icon: 'bash' },
      { name: 'PowerShell', icon: 'powershell' },
      { name: 'Kali Linux', icon: 'kali' },
      { name: 'Arch Linux', icon: 'arch' },
      { name: 'Metasploit basics' },
      { name: 'Shodan' },
      { name: 'Maltego' },
      { name: 'NIST guidance familiarity' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Windows', icon: 'windows' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: 'Azure DevOps', icon: 'azure' },
      { name: 'IntelliJ IDEA', icon: 'idea' },
      { name: 'Visual Studio', icon: 'visualstudio' },
      { name: 'Vim', icon: 'vim' },
      { name: 'LaTeX', icon: 'latex' },
    ],
  },
];

import { assetUrl } from '@/utils/assetUrl';

export const portraitPath = 'assets/images/1000055083.jpg';

export interface Artifact {
  title: string;
  tags: string[];
  made: string;
  learned: string;
  links: { label: string; href: string }[];
  video?: string;
  image?: { src: string; alt: string };
}

export const artifacts: Artifact[] = [
  {
    title: 'Belonging Is Not a Gift',
    tags: ['Zine', 'Communication Skills', 'Ethics and Equity'],
    image: { src: assetUrl('assets/images/zine.png'), alt: 'Belonging Is Not a Gift zine' },
    made: 'A handmade zine about being a daughter, an outsider, and a storyteller.',
    learned:
      'Making it gave me a way to reflect on identity, cultural expectations, and learning to accept myself. It reminded me that creativity is another way to understand experience, and it connects to my values of freedom, privacy, and peace.',
    links: [
      {
        label: 'Open zine',
        href: 'https://drive.google.com/drive/folders/12eyZtOftmGQA0vVKIUQ8e6WYY10_kzup?usp=sharing',
      },
    ],
  },
  {
    title: 'Why Me? Pitch',
    tags: ['Presentation + video', 'Communication Skills', 'Professionalism'],
    made: 'A pitch connecting my education, co-op, volunteering, technical projects, and creative interests.',
    learned:
      'Building it helped me see how my experiences fit together. It highlights initiative, attention to detail, adaptability, and communication while keeping me open to improvement.',
    links: [
      {
        label: 'Watch the video',
        href: 'https://drive.google.com/file/d/1u7Ko_ZpF_fQYFIHXbJspwf3je_hRUHRn/view?usp=drive_link',
      },
    ],
    video: 'https://drive.google.com/file/d/1u7Ko_ZpF_fQYFIHXbJspwf3je_hRUHRn/preview',
  },
  {
    title: 'About Me: Finding My Own Direction',
    tags: ['Personal reflection', 'Values', 'Career direction'],
    made: 'A personal reflection on my story, my values, and the kind of career I want to build.',
    learned:
      'Writing it helped me connect my education, volunteering, and co-op experiences into one picture of the direction I want to take.',
    links: [{ label: 'Read About Me', href: assetUrl('assets/documents/Tehreem_Asad_-_About_Me.pdf') }],
  },
  {
    title: 'SMART Goals',
    tags: ['Development plan', 'Problem Analysis', 'Economics and Project Management'],
    made: 'Goals for financial reporting, journal review, financial authority, initiative, and networking.',
    learned:
      'Writing them made my growth measurable. They connect careful analysis from Cyber Security with the evidence-based work I do in finance.',
    links: [{ label: 'Read my goals', href: assetUrl('assets/documents/SMART_Goals_Tehreem.pdf') }],
  },
];

export const photoAlbum: { src: string; alt: string }[] = [
  { src: assetUrl('assets/images/photography1.jpg'), alt: 'Clear water over colourful stones on a lake bed' },
  { src: assetUrl('assets/images/photography2.jpg'), alt: 'Dandelions in the grass with a modern building behind' },
  { src: assetUrl('assets/images/photography3.jpg'), alt: 'Niagara Falls with a tour boat and a rainbow' },
  { src: assetUrl('assets/images/photography4.jpg'), alt: 'Young sapling growing at the base of a mossy tree trunk' },
  { src: assetUrl('assets/images/photography12.jpg'), alt: 'Modern university building with towers fading into morning fog' },
  { src: assetUrl('assets/images/photography6.jpg'), alt: 'City skyline at night with a street lamp and orange traffic barriers' },
  { src: assetUrl('assets/images/photography15.jpg'), alt: 'Wooden plank footbridge crossing a fast river with a stone wall behind' },
  { src: assetUrl('assets/images/photography13.jpg'), alt: 'Small pink wildflowers growing among green moss on rocky ground' },
  { src: assetUrl('assets/images/photography14.jpg'), alt: 'Black cow grazing in a mountain meadow with yellow wildflowers and snowy peaks' },
  { src: assetUrl('assets/images/photography9.jpg'), alt: 'Mountain meadow with wildflowers under a blue sky' },
  { src: assetUrl('assets/images/photography8.jpg'), alt: 'Rows of cherry trees in an orchard with a grass path' },
  { src: assetUrl('assets/images/photography7.jpg'), alt: 'Mallard duck swimming in a pond beside flowering shrubs' },
  { src: assetUrl('assets/images/photography5.jpg'), alt: 'Wooden pavilion by a mountain lake at dusk' },
  { src: assetUrl('assets/images/photography10.jpg'), alt: 'Seagull standing on grass in a park with people walking nearby' },
  { src: assetUrl('assets/images/photography11.jpg'), alt: 'Person standing on a manhole cover framed by a painted crab on the pavement' },
];

export const aboutParagraphs = [
  'I am a Cyber Security student at York University’s Lassonde School of Engineering. I enjoy understanding how systems work, investigating problems, and finding solutions.',
  'Outside school and work, I enjoy reading, travelling, trying different foods, and capturing little moments.',
];

export type GoalArea = 'Cyber Security' | 'Computer Science';

export interface Goal {
  area: GoalArea;
  title: string;
  description: string;
  target: string;
}

export const goals: Goal[] = [
  {
    area: 'Cyber Security',
    title: 'Build hands-on Linux and Bash skills',
    description: 'Practise command-line security tasks in labs and personal projects.',
    target: 'Ongoing',
  },
  {
    area: 'Cyber Security',
    title: 'Deepen web application security',
    description:
      'Learn the OWASP Top 10 and apply secure coding practices to my Node.js and Express projects.',
    target: 'Ongoing',
  },
  {
    area: 'Cyber Security',
    title: 'Learn threat analysis and testing basics',
    description:
      'Continue working with Metasploit, Shodan, and Maltego in legal, authorized lab environments.',
    target: 'Ongoing',
  },
  {
    area: 'Computer Science',
    title: 'Strengthen programming fundamentals',
    description: 'Build confidence in data structures and algorithms through projects in Java, Python, and C.',
    target: 'Ongoing',
  },
  {
    area: 'Cyber Security',
    title: 'Complete cyber security projects',
    description: 'Build hands-on projects that apply what I learn in coursework and labs.',
    target: 'Ongoing',
  },
  {
    area: 'Cyber Security',
    title: 'Earn cyber security certifications',
    description:
      'Complete the Google Cybersecurity Certificate with a top 1 result, and work toward CompTIA Security+, GRC Mastery, and TryHackMe certifications.',
    target: 'Ongoing',
  },
];

export const resumeFile: string | null = 'assets/documents/Resume(co-op).pdf';

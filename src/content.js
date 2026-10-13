// All site copy lives here. Source: Faizal_Amri_Resume.pdf; Skoolbeez app list from the team's repos.

export const profile = {
  name: 'Faizal Amri',
  role: 'Tech Lead · Full-Stack Developer',
  location: 'Shah Alam, Malaysia',
  email: 'faizalmr33@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizal-amri-300261178/',
  summary:
    'I build web systems for education, government and business clients in Malaysia. Today I lead a team of five developers on Skoolbeez, a SaaS ecosystem of 20+ Laravel apps serving 80+ schools, working in the Laravel TALL stack, Filament and PostgreSQL with an AI-driven workflow built on Claude Code.',
};

export const stats = [
  { value: '5', label: 'years building production systems' },
  { value: '80+', label: 'schools on Skoolbeez' },
  { value: '20+', label: 'apps in the Skoolbeez ecosystem' },
  { value: '5', label: 'developers on my team' },
];

export const experience = [
  {
    role: 'Tech Lead',
    company: 'Bit Extreme Infotech Sdn Bhd',
    place: 'Skudai, Johor',
    period: '2024 – Present',
    points: [
      'Lead a team of 5 developers building Skoolbeez, a SaaS school management platform used by 80+ schools and district education offices (PPD).',
      'Own the architecture of 20+ connected Laravel apps: student, parent, school, executive and PSS portals, SkoolBeez ID single sign-on, the EduHub learning platform, and subscription and finance admin.',
      'Review all team code and make the core architecture and technical decisions.',
      'Run sprint planning and reprioritise delivery as SaaS requirements evolve.',
      'Mentor developers on Laravel best practices, code quality and system design.',
      'Use an AI-driven development workflow with Claude Code to speed up feature delivery.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Bit Extreme Infotech Sdn Bhd',
    place: 'Skudai, Johor',
    period: '2022 – 2024',
    points: [
      'Led the migration of Modul Nilam Johor from Yii2 to the Laravel TALL stack (MNJ2).',
      'Delivered state-government systems for PTG, BPENJ and PADAT Selangor, plus business and foundation systems.',
      'Built reports with JasperReports Server and optimised SQL queries for database performance.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Holistics Lab Sdn Bhd',
    period: '2021 – 2022',
    points: [
      'Delivered MyHalalGIG for Duopharma, from requirements gathering to deployment.',
      'Built QuikHalal, a halal auditing system for site inspections and corrective actions.',
      'Designed database structures and worked in Agile sprints with Jira and Bitbucket.',
    ],
  },
];

export const featured = {
  name: 'Skoolbeez',
  tagline: 'SaaS school management ecosystem',
  description:
    'More than 20 Laravel apps, used by 80+ schools and district education offices, sharing one login and one in-house UI kit. I own the architecture across all of them and lead the team that ships it.',
  groups: [
    {
      title: 'Portals',
      items: ['Student', 'Parent', 'School', 'Executive (PPD)', 'PSS — Pusat Sumber Sekolah', 'User management'],
    },
    {
      title: 'Platform',
      items: [
        'SkoolBeez ID — single sign-on (OIDC, MFA)',
        'EduHub — Edu Learn, Game Hub, Marketplace, Points, Badges',
        'Subscription & finance admin',
        'Shared Blade UI kit + docs',
      ],
    },
  ],
  stack: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'Filament', 'PostgreSQL', 'Octane'],
};

export const projects = [
  {
    name: 'Modul Nilam Johor 2 (MNJ2)',
    client: 'Johor state education',
    description: 'Led the migration of a state-wide reading record system from Yii2 to Laravel, adding real-time reporting and dashboard analytics.',
    stack: ['Laravel TALL', 'MySQL', 'JasperReports'],
  },
  {
    name: 'e-Strata 2',
    client: 'Johor State Land Administration (PTG)',
    description: 'Built the parcel-rent module, integrated with Sistem Hasil Tanah Johor (SHTJ) for payments.',
    stack: ['Yii2', 'JavaScript', 'MySQL'],
  },
  {
    name: 'Skator 2',
    client: 'Johor State Land Administration (PTG)',
    description: 'Parcel-rent calculator that sets rates by city type, development type and parcel area.',
    stack: ['Yii2', 'JavaScript', 'MySQL'],
  },
  {
    name: 'JoMS — PKAS & SSI',
    client: 'Bahagian Perancang Ekonomi Negeri Johor (BPENJ)',
    description: 'Modules to monitor state projects with private partners and track real estate inventory across Johor.',
    stack: ['Yii2', 'JavaScript', 'MySQL'],
  },
  {
    name: 'Twin Sales Systems',
    client: 'Private sector',
    description: 'Job sheets, sales reporting, dashboards, and HR claims and leave in one platform.',
    stack: ['Laravel TALL', 'MySQL', 'JasperReports'],
  },
  {
    name: 'e-TLJCF',
    client: 'Yayasan Kanser Tunku Laksamana Johor',
    description: 'Management system for patient support programmes, fundraising and donation tracking.',
    stack: ['Yii2', 'JavaScript', 'MySQL'],
  },
  {
    name: 'PADAT Integrated Inventory',
    client: 'PADAT Selangor',
    description: 'Documents Malay customs and cultural heritage and manages artefacts and collections.',
    stack: ['Yii2', 'JavaScript', 'MySQL'],
  },
  {
    name: 'MyHalalGIG',
    client: 'Duopharma',
    description: 'Halal certification management, delivered from requirements gathering to deployment.',
    stack: ['Laravel', 'ReactJS', 'MySQL'],
  },
  {
    name: 'QuikHalal',
    client: 'Holistics Lab',
    description: 'Halal auditing for site inspections, audit reports and corrective action tracking.',
    stack: ['Laravel', 'ReactJS', 'MySQL'],
  },
  {
    name: 'Fall Detection System',
    client: 'Final year project, UTHM',
    description: 'Detects falls in real time from a Raspberry Pi camera and sends alerts, with a PHP and MySQL backend.',
    stack: ['Python', 'OpenCV', 'Raspberry Pi', 'PHP'],
  },
];

export const skills = [
  { group: 'Languages', items: ['PHP', 'JavaScript', 'SQL', 'Python', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'Filament', 'Yii2', 'ReactJS'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { group: 'Tools', items: ['Claude Code', 'Git', 'Bitbucket', 'Jira', 'JasperReports Server'] },
  { group: 'Practices', items: ['SaaS architecture', 'Code review', 'Agile / Scrum', 'Sprint planning', 'System migration', 'Database design', 'Technical mentoring'] },
];

export const education = [
  {
    title: 'Bachelor of Information Technology with Honours',
    school: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
    period: '2019 – 2021',
  },
  {
    title: 'Diploma in Information Technology',
    school: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
    period: '2015 – 2018',
  },
];

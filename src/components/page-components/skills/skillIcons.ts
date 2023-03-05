const languages: SkillItem[] = [
  {
    name: 'javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
    url: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    name: 'typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178C6',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    color: '#0175C2',
    url: 'https://dart.dev',
  },
];
const backend: SkillItem[] = [
  {
    name: 'express',
    icon: '/icons/express.svg',
    color: '#fff',
    url: 'https://expressjs.com/',
  },
  {
    name: 'nodejs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933',
    url: 'https://nodejs.org/en/',
  },
];
const frontend: SkillItem[] = [
  {
    name: 'react',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
    url: 'https://reactjs.org/',
  },
  {
    name: 'nextjs',
    icon: '/icons/nextjs.svg',
    color: '#fff',
    url: 'https://nextjs.org/',
  },
  {
    name: 'astro',
    icon: '/icons/astro.svg',
    color: '#FF5D01',
    url: 'https://astro.build/',
  },
];
const databases: SkillItem[] = [
  {
    name: 'mongodb',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248',
    url: 'https://mongodb.com',
  },
  {
    name: 'supabase',
    icon: '/icons/supabase.svg',
    color: '#3ECF8E',
    url: 'https://supabase.com',
  },
  {
    name: 'xata',
    icon: '/icons/xata.svg',
    color: '#f60071',
    url: 'https://xata.io',
  },
];
const mobile: SkillItem[] = [
  {
    name: 'flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    color: '#02569B',
    url: 'https://flutter.dev',
  },
];

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
  url: string;
  categories?: string[];
}

export const skills: { [k: string]: SkillItem[] } = {
  all: [...languages, ...frontend, ...backend, ...databases, ...mobile],
  languages,
  backend,
  frontend,
  databases,
  mobile,
};

export type Project = {
  name: string;
  category: string;
  description: string;
  href: string;
  theme: 'finance' | 'civic';
  number: string;
};

export const projects: Project[] = [
  {
    name: 'Imber Finance', category: 'Personal finance',
    description: "A personal finance platform I'm building to make everyday money management, planning and financial decisions clearer.",
    href: 'https://finsite.imber.me', theme: 'finance', number: '01',
  },
  {
    name: 'WardWorks', category: 'Civic technology',
    description: 'A civic technology project focused on making local government, municipal issues and service delivery easier to understand and track.',
    href: 'https://wardworks.imber.me', theme: 'civic', number: '02',
  },
];
export const workUrl = 'https://work.imber.me';

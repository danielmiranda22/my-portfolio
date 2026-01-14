import Badge from './Badge';

export default interface Project {
  image: string;
  title: string;
  description: string;
  sideNote: string;
  badges: Badge[];
  links: { text: string; href: string }[];
  status?: 'in-progress' | 'completed';
}

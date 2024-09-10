import Badge from './Badge';

export default interface Project {
  image: string;
  title: string;
  description: string;
  badges: Badge[];
}

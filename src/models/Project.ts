import Badge from './Badge';
import ProjectDomain from './ProjectDomain';

export default interface Project {
  image: string;
  title: string;
  description: string;
  sideNote: string;
  badges: Badge[];
  projectsDomains: ProjectDomain[];
}

import Badge from './Badge';
import Tag from './Tag';

export default interface Experience {
  image: string;
  company: string;
  role: string;
  interval: string;
  badges: Badge[];
  listItems: string[];
  tag: Tag;
}

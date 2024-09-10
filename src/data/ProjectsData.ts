import { useEffect, useState } from 'react';
import Badge from '../models/Badge';
import Project from '../models/Project';
import ProjectDomain from '../models/ProjectDomain';

const parseProjects = (mdContent: string) => {
  const projects = [] as Project[];
  const lines = mdContent.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('#')) {
      const title = line.substring(2).trim();
      i++;
      const description = lines[++i].substring(2).trim();
      const image = lines[++i].match(/!\[(.*)\]\((.*)\)/)![2];
      const badges = [] as Badge[];
      const projectsDomains = [] as ProjectDomain[];

      while (lines[++i] && !lines[i].startsWith('- Badges:')) {}
      while (lines[++i] && lines[i].startsWith('  - ')) {
        const badgeLine = lines[i].substring(4).split('[');
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split(']')[0].trim();
        badges.push({ name: badgeName, colorScheme: badgeColor });
      }

      while (lines[++i] && lines[i].startsWith('  - ')) {
        const buttonLine = lines[i].substring(4).split('[');
        const buttonText = buttonLine[0].trim();
        const buttonHref = buttonLine[1].split(']')[0].trim();
        projectsDomains.push({ text: buttonText, href: buttonHref });
      }

      projects.push({
        image,
        title,
        description,
        badges,
        projectsDomains,
      });
    }
  }

  return projects;
};

const ProjectsData = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/content/Projects.md')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch markdonw content');

        return response.text();
      })
      .then((mdContent) => {
        setProjects(parseProjects(mdContent));
      })
      .catch((error) => {
        console.error('Error fetching markdown content', error);
      });
  }, []);

  return projects;
};

export default ProjectsData;

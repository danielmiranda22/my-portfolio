import { useEffect, useState } from 'react';
import Experience from '../models/Experience';
import Badge from '../models/Badge';

const parseExperience = (content: string) => {
  const experience = [] as Experience[];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('##')) {
      const company = line.substring(2).trim();
      i++;
      const role = lines[++i].substring(2).split('|')[0].trim();
      const interval = lines[i].split('|')[1].trim();
      const image = lines[++i].match(/!\[(.*)\]\((.*)\)/)![2];
      const tag = lines[++i].split(':')[1].trim();
      const badges = [] as Badge[];
      const listItems = [];

      while (lines[++i] && !lines[i].startsWith('- Badges:')) {}
      while (lines[++i] && lines[i].startsWith('  - ')) {
        const badgeLine = lines[i].substring(4).split('[');
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split(']')[0].trim();
        badges.push({ name: badgeName, colorScheme: badgeColor });
      }

      while (lines[++i] && lines[i].startsWith('  - ')) {
        listItems.push(lines[i].substring(4));
      }

      experience.push({
        image,
        company,
        role,
        interval,
        badges,
        listItems,
        tag: { tagName: tag },
      });
    }
  }

  return experience;
};

const ExperiencesData = (): Experience[] => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    try {
      fetch('/content/Experiences.md')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch the data ');

          return res.text();
        })
        .then((content) => {
          setExperiences(parseExperience(content));
        });
    } catch (error) {
      throw new Error('Error fetching the data');
    }
  }, []);

  return experiences;
};

export default ExperiencesData;

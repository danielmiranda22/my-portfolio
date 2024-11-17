import { useEffect, useState } from 'react';

const parseProfile = (mdContent: string) => {
  const profile = {
    logo: '',
    heroCumpliment: '',
    aboutBrief: '',
    tech: [] as string[],
    aboutExtra: '',
    aboutActivitiesTitle: '',
    aboutActivitiesTravel: '',
    aboutActivitiesPlaySports: '',
    aboutActivitiesHangOut: '',
    tools: [] as string[],
    resumeHeaderOne: '',
    resumeInfoOne: [] as string[],
    resumeHeaderTwo: '',
    resumeInfoTwo: [] as string[],
    resumeHeaderThree: '',
    resumeInfoThree: [] as string[],
    contactPhoneNumber: '',
    contactEmail: '',
    contactAddress: '',
    contactLinkdin: '',
  };

  const lines = mdContent.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const section = line.substring(3).trim();

      switch (section) {
        case 'Logo':
          i++;
          profile.logo = lines[++i].substring(2).trim();
          break;
        case 'Hero':
          i++;
          profile.heroCumpliment = lines[++i].substring(2).trim();
          break;
        case 'About':
          i++;
          profile.aboutBrief = lines[++i].substring(2).trim();
          break;
        case 'TechStack':
          i++;
          for (let j = i; j < lines.length; j++) {
            const line = lines[j];
            if (line.startsWith('- ')) {
              profile.tech.push(lines[j].substring(2).trim());
            }
            if (line.startsWith('## ')) {
              break;
            }
          }
          break;
          break;
        case 'AboutExtra':
          i++;
          profile.aboutExtra = lines[++i].substring(2).trim();
          break;
        case 'MyActivities':
          i++;
          profile.aboutActivitiesTitle = lines[++i].substring(2).trim();
          profile.aboutActivitiesTravel = lines[++i].substring(2).trim();
          profile.aboutActivitiesPlaySports = lines[++i].substring(2).trim();
          profile.aboutActivitiesHangOut = lines[++i].substring(2).trim();
          break;
        case 'Tools':
          i++;
          for (let j = i; j < lines.length; j++) {
            const line = lines[j];
            if (line.startsWith('- ')) {
              profile.tools.push(lines[j].substring(2).trim());
            }
            if (line.startsWith('## ')) {
              break;
            }
          }
          break;
        case 'Resume':
          i++;
          profile.resumeHeaderOne = lines[++i].substring(2).trim();
          while (lines[++i].startsWith('  ->')) {
            profile.resumeInfoOne.push(lines[i].substring(4).trim());
          }
          profile.resumeHeaderTwo = lines[i].substring(2).trim();
          while (lines[++i].startsWith('  ->')) {
            profile.resumeInfoTwo.push(lines[i].substring(4).trim());
          }
          profile.resumeHeaderThree = lines[i].substring(2).trim();
          while (lines[++i].startsWith('  ->')) {
            profile.resumeInfoThree.push(lines[i].substring(4).trim());
          }
          break;
        case 'Contact':
          i++;
          profile.contactPhoneNumber = lines[++i].substring(2).trim();
          profile.contactEmail = lines[++i].substring(2).trim();
          profile.contactAddress = lines[++i].substring(2).trim();
          profile.contactLinkdin = lines[++i].substring(2).trim();
          break;
        default:
          break;
      }
    }
  }

  return profile;
};

const ProfileData = () => {
  const [profile, setProfile] = useState({
    logo: '',
    heroCumpliment: '',
    aboutBrief: '',
    aboutExtra: '',
    tech: [] as string[],
    aboutActivitiesTitle: '',
    aboutActivitiesTravel: '',
    aboutActivitiesPlaySports: '',
    aboutActivitiesHangOut: '',
    tools: [] as string[],
    resumeHeaderOne: '',
    resumeInfoOne: [] as string[],
    resumeHeaderTwo: '',
    resumeInfoTwo: [] as string[],
    resumeHeaderThree: '',
    resumeInfoThree: [] as string[],
    contactPhoneNumber: '',
    contactEmail: '',
    contactAddress: '',
    contactLinkdin: '',
  });

  useEffect(() => {
    fetch('/content/Profile.md')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');

        return res.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent));
      })
      .catch((err) => {
        console.log('Error fetching the data', err);
      });
  }, []);

  return profile;
};

export default ProfileData;

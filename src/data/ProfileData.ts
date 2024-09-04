import { useEffect, useState } from 'react';

const parseProfile = (mdContent: string) => {
  const profile = {
    logo: '',
    heroCumpliment: '',
    heroNameIntro: '',
    heroName: '',
    heroRole: '',
    heroDescription: '',
    aboutTopicOne: '',
    aboutTopicTwo: '',
    aboutTopicThree: '',
    aboutExtraTitle: '',
    aboutExtraTravel: '',
    aboutExtraPlaySports: '',
    aboutExtraHangOut: '',
    skills: [] as string[],
    tools: [] as string[],
    contactPhoneNumber: '',
    contactEmail: '',
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
          profile.heroNameIntro = lines[++i].substring(2).trim();
          profile.heroName = lines[++i].substring(2).trim();
          profile.heroRole = lines[++i].substring(2).trim();
          profile.heroDescription = lines[++i].substring(2).trim();
          break;
        case 'About':
          i++;
          profile.aboutTopicOne = lines[++i].substring(2).trim();
          profile.aboutTopicTwo = lines[++i].substring(2).trim();
          profile.aboutTopicThree = lines[++i].substring(2).trim();
          break;
        case 'AboutExtra':
          i++;
          profile.aboutExtraTitle = lines[++i].substring(2).trim();
          profile.aboutExtraTravel = lines[++i].substring(2).trim();
          profile.aboutExtraPlaySports = lines[++i].substring(2).trim();
          profile.aboutExtraHangOut = lines[++i].substring(2).trim();
          break;
        case 'Skills':
          i++;
          for (let j = i; j < lines.length; j++) {
            const line = lines[j];
            if (line.startsWith('- ')) {
              profile.skills.push(lines[j].substring(2).trim());
            }
            if (line.startsWith('## ')) {
              break;
            }
          }
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
        case 'Contact':
          i++;
          profile.contactPhoneNumber = lines[++i].substring(2).trim();
          profile.contactEmail = lines[++i].substring(2).trim();
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
    heroNameIntro: '',
    heroName: '',
    heroRole: '',
    heroDescription: '',
    aboutTopicOne: '',
    aboutTopicTwo: '',
    aboutTopicThree: '',
    aboutExtraTitle: '',
    aboutExtraTravel: '',
    aboutExtraPlaySports: '',
    aboutExtraHangOut: '',
    skills: [] as string[],
    tools: [] as string[],
    contactPhoneNumber: '',
    contactEmail: '',
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

import { useEffect, useState } from 'react';

const parseProfile = (mdContent: string) => {
  const profile = {
    logo: '',
    heroCumpliment: '',
    heroNameIntro: '',
    heroName: '',
    heroRole: '',
    heroDescription: '',
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

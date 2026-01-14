import { useEffect, useState } from 'react';
import Profile from '../models/Profile';

const ProfileData = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/profile.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch profile');
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { profile, loading, error };
};

export default ProfileData;

import { useEffect, useState } from 'react';
import Experience from '../models/Experience';

const ExperiencesData = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/experiences.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch experiences');
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching experiences:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { experiences, loading, error };
};

export default ExperiencesData;

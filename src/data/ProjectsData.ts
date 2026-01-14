import { useEffect, useState } from 'react';
import Project from '../models/Project';

const ProjectsData = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/content/projects.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch markdonw content');
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching markdown content', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
};

export default ProjectsData;

import { Box, Container, Skeleton, Stack, Text } from '@chakra-ui/react';
import ProjectsData from '../data/ProjectsData';
import ProjectComponent from './ProjectComponent';

const Projects = () => {
  const { projects, loading, error } = ProjectsData();

  if (loading)
    return (
      <Container maxW="3xl">
        <Stack
          as={Box}
          spacing={4}
          pb={{ base: 16, md: 20 }}
          pt={{ base: 4, md: 6 }}
          px={4}
        >
          <Skeleton height="300px" borderRadius="lg" />
          <Skeleton height="300px" borderRadius="lg" />
        </Stack>
      </Container>
    );

  if (error)
    return (
      <Container maxW="3xl" id="projects">
        <Box pt={{ base: 100, md: 20 }}>
          <Text color="red500">Failed to load projects: {error.message}</Text>
        </Box>
      </Container>
    );

  return (
    <Container maxW="3xl" id="projects">
      <Stack
        as={Box}
        textAlign="center"
        spacing={8}
        pb={{ base: 16, md: 20 }}
        pt={{ base: 4, md: 6 }}
      >
        <Stack px={4} spacing={4}>
          {projects.map((project) => (
            <ProjectComponent key={project.title} project={project} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Projects;

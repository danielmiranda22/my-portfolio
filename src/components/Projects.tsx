import { Box, Container, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import ProjectsData from '../data/ProjectsData';
import ProjectComponent from './ProjectComponent';
import colors from '../utilities/colors';

const Projects = () => {
  const projects = ProjectsData();

  return (
    <Container maxW="3xl" id="projects">
      <Stack
        as={Box}
        textAlign="center"
        spacing={8}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 100, md: 20 }}
      >
        <Stack px={4} spacing={4}>
          {projects.map((project) => (
            <ProjectComponent project={project} key={project.title} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Projects;

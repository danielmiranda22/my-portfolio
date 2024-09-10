import { Box, Container, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import ProjectsData from '../data/ProjectsData';
import ProjectComponent from './ProjectComponent';
import colors from '../utilities/colors';

const Projects = () => {
  const projects = ProjectsData();

  return (
    <Container maxW="4xl" id="projects">
      <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 16 }} pb={20}>
        <Stack direction="row" align="center">
          <HStack mx={4}>
            <Text color={colors['teal']} fontWeight={800}>
              {' '}
              03
            </Text>
            <Text fontWeight={800}>Projects</Text>
          </HStack>
          <Divider color={colors['gray600']} />
        </Stack>
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

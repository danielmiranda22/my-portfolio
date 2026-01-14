import { Box, Container, Skeleton, Stack, Text } from '@chakra-ui/react';
import ExperiencesData from '../data/ExperiencesData';
import ExperienceComp from './ExperienceComp';

const Experiences = () => {
  const { experiences, loading, error } = ExperiencesData();

  // Loading state
  if (loading) {
    return (
      <Container maxW="3xl" id="experience">
        <Stack
          as={Box}
          spacing={4}
          pb={{ base: 16, md: 20 }}
          pt={{ base: 4, md: 6 }}
          px={4}
        >
          <Skeleton height="250px" borderRadius="lg" />
        </Stack>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxW="3xl" id="experience">
        <Box pt={{ base: 100, md: 20 }}>
          <Text color="red.500">Failed to load experiences: {error}</Text>
        </Box>
      </Container>
    );
  }

  // Success state
  return (
    <Container maxW="3xl" id="experience">
      <Stack
        as={Box}
        textAlign="center"
        spacing={8}
        pb={{ base: 16, md: 20 }}
        pt={{ base: 4, md: 6 }}
      >
        <Stack px={4} spacing={4}>
          {experiences.map((exp) => (
            <ExperienceComp experience={exp} key={exp.company} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Experiences;

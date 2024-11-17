import { Box, Container, Stack } from '@chakra-ui/react';
import SectionDivider from './SectionDivider';
import ExperiencesData from '../data/ExperiencesData';
import ExperienceComp from './ExperienceComp';

const Experiences = () => {
  const experiences = ExperiencesData();

  return (
    <Container maxW="3xl" id="experience">
      <Stack
        as={Box}
        textAlign="center"
        spacing={8}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 100, md: 20 }}
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

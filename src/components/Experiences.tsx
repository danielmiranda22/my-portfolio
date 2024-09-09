import { Box, Container, Stack } from '@chakra-ui/react';
import SectionDivider from './SectionDivider';
import ExperiencesData from '../data/ExperiencesData';
import ExperienceComp from './ExperienceComp';

const Experiences = () => {
  const experiences = ExperiencesData();

  return (
    <Container maxW="4xl" id="experience">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 16 }}
        pb={{ base: 20, md: 20 }}
      >
        <SectionDivider sectionNumber="03" sectionText="Experiences" />

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

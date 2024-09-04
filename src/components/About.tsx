import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import colors from '../utilities/colors';
import SectionDivider from './SectionDivider';
import ProfileData from '../data/ProfileData';
import profileIMG from '../assets/profileIMG.webp';
import { LuCoffee, LuPlaneTakeoff } from 'react-icons/lu';
import { GiWeightLiftingUp } from 'react-icons/gi';
import Skill from './Skill';

const About = () => {
  const profile = ProfileData();

  return (
    <Container maxW="3xl" id="about">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <SectionDivider sectionNumber="01" sectionText="About" />

        <Heading>
          BRIEF INRODUCTION <Text color={`${colors['teal']}`}>OF MYSELF</Text>
        </Heading>

        <Flex direction="row">
          <VStack spacing={4}>
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutTopicOne}
            </Text>
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutTopicTwo}
            </Text>
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutTopicThree}
            </Text>
          </VStack>

          <Box minW={'fit-content'}>
            <Image
              rounded="full"
              boxSize="250px"
              objectFit="cover"
              src={profileIMG}
              alt={profile.logo}
            />
          </Box>
        </Flex>

        <Divider />

        <VStack spacing={4} alignItems="start">
          <Text
            as="span"
            fontSize="xl"
            color={colors['gray600']}
            textAlign="left"
          >
            {profile.aboutExtraTitle}
          </Text>
          <HStack>
            <LuPlaneTakeoff color={colors['teal']} />
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutExtraTravel}
            </Text>
          </HStack>
          <HStack>
            <GiWeightLiftingUp color={colors['teal']} />
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutExtraPlaySports}
            </Text>
          </HStack>
          <HStack>
            <LuCoffee color={colors['teal']} />
            <Text
              as="span"
              fontSize="xl"
              color={colors['gray600']}
              textAlign="left"
            >
              {profile.aboutExtraHangOut}
            </Text>
          </HStack>
        </VStack>

        <Heading>
          Professional{' '}
          <Text color={`${colors['teal']}`} as="strong">
            Skillset
          </Text>
        </Heading>

        <Flex direction="row" gap={5} justifyContent="center" wrap="wrap">
          {profile.skills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </Flex>

        <Heading>
          My{' '}
          <Text color={`${colors['teal']}`} as="strong">
            Tools
          </Text>
        </Heading>

        <Flex direction="row" gap={5} justifyContent="center" wrap="wrap">
          {profile.tools.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default About;

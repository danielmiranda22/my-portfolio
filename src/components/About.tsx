import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import colors from '../utilities/colors';
import ProfileData from '../data/ProfileData';
import devImg from '../assets/dev.svg';
import { LuCoffee, LuPlaneTakeoff } from 'react-icons/lu';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import Skill from './Skill';

const About = () => {
  const profile = ProfileData();

  return (
    <Container maxW="3xl" id="about">
      <Stack
        as={Box}
        textAlign="left"
        spacing={8}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 100, md: 20 }}
      >
        <Text fontSize="md">{profile.heroCumpliment}</Text>

        <VStack spacing={4} alignItems="start">
          <Text as="span" fontSize="md" textAlign="left">
            {profile.aboutActivitiesTitle}
          </Text>

          <List width="100%" textAlign="start" spacing={4}>
            <ListItem>
              <ListIcon as={LuPlaneTakeoff} color={colors['teal']} />
              {profile.aboutActivitiesTravel}
            </ListItem>
            <ListItem>
              <ListIcon as={GiWeightLiftingUp} color={colors['teal']} />
              {profile.aboutActivitiesPlaySports}
            </ListItem>
            <ListItem>
              <ListIcon as={LuCoffee} color={colors['teal']} />
              {profile.aboutActivitiesHangOut}
            </ListItem>
          </List>
        </VStack>

        <Box minW={'fit-content'} alignSelf="center">
          <Image
            rounded="full"
            boxSize="350px"
            objectFit="cover"
            src={devImg}
          />
        </Box>

        <Heading size="lg">
          Tech{' '}
          <Text as="span" color={`${colors['teal']}`}>
            Stack
          </Text>
        </Heading>

        <VStack spacing={4}>
          <Text fontSize="md">{profile.aboutBrief}</Text>

          <List width="100%" textAlign="start" spacing={3}>
            {profile.tech.map((tech, index) => (
              <ListItem key={index}>
                <ListIcon as={GoDotFill} color={colors['teal']} />
                {tech}
              </ListItem>
            ))}
          </List>

          <Text fontSize="md">{profile.aboutExtra}</Text>
        </VStack>

        <Heading size="lg">
          My{' '}
          <Text color={`${colors['teal']}`} as="strong">
            Tools
          </Text>
        </Heading>

        <Flex direction="row" gap={5} justifyContent="start" wrap="wrap">
          {profile.tools.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default About;

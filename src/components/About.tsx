import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import devImg from '../assets/dev.svg';
import { LuGithub, LuLinkedin, LuMail, LuPlaneTakeoff } from 'react-icons/lu';
import { GiCoffeeCup, GiHiking, GiWeightLiftingUp } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import Skill from './Skill';

const About = () => {
  const { profile, loading } = ProfileData();

  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  const goToLinkdin = () => {
    if (profile?.contactLinkdin) {
      window.open(profile.contactLinkdin, '_blank', 'noreferrer,noopener');
    }
  };

  const goToEmail = () => {
    if (profile?.contactEmail) {
      window.open(
        `mailto:${profile.contactEmail}`,
        '_blank',
        'noreferrer,noopener',
      );
    }
  };

  const goToGithub = () => {
    if (profile?.contactGithub) {
      window.open(profile.contactGithub, '_blank', 'noreferrer,noopener');
    }
  };

  if (loading || !profile) {
    return (
      <Container maxW="3xl" id="about">
        <Stack
          as={Box}
          spacing={8}
          pb={{ base: 16, md: 20 }}
          pt={{ base: 4, md: 6 }}
        >
          <Skeleton height="100px" />
          <Skeleton height="200px" />
          <Skeleton height="300px" borderRadius="full" mx="auto" />
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW="3xl" id="about">
      <Stack
        as={Box}
        textAlign="left"
        spacing={12}
        pb={{ base: 16, md: 20 }}
        pt={{ base: 4, md: 6 }}
      >
        {/* Intro Text */}
        <Text fontSize="lg" lineHeight="tall">
          {profile.heroCumpliment}
        </Text>

        {/* Activities Section */}
        <Box
          bg={cardBg}
          p={6}
          borderRadius="xl"
          border="1px solid"
          borderColor={cardBorder}
        >
          <VStack spacing={4} alignItems="start">
            <Text fontSize="md" fontWeight="500">
              {profile.aboutActivitiesTitle}
            </Text>

            <List width="100%" textAlign="start" spacing={3}>
              <ListItem>
                <ListIcon as={GiWeightLiftingUp} color="brand.500" />
                {profile.aboutActivitiesPlaySports}
              </ListItem>
              <ListItem>
                <ListIcon as={LuPlaneTakeoff} color="brand.500" />
                {profile.aboutActivitiesTravel}
              </ListItem>
              <ListItem>
                <ListIcon as={GiHiking} color="brand.500" />
                {profile.aboutActivitiesHiking}
              </ListItem>
              <ListItem>
                <ListIcon as={GiCoffeeCup} color="brand.500" />
                {profile.aboutActivitiesHangOut}
              </ListItem>
            </List>
          </VStack>
        </Box>

        {/* Profile Image */}
        <Box minW={'fit-content'} alignSelf="center">
          <Image
            rounded="full"
            boxSize="300px"
            objectFit="cover"
            src={devImg}
            border="4px solid"
            borderColor="brand.500"
            shadow="lg"
          />
        </Box>

        {/* Tech Stack Section */}
        <VStack spacing={6} align="start">
          <Heading size="lg">
            Tech{' '}
            <Text as="span" color="brand.500">
              Stack
            </Text>
          </Heading>

          <Text fontSize="md" lineHeight="tall">
            {profile.aboutBrief}
          </Text>

          <List width="100%" textAlign="start" spacing={2}>
            {profile.tech.map((tech, index) => (
              <ListItem key={index}>
                <ListIcon as={GoDotFill} color="brand.500" />
                {tech}
              </ListItem>
            ))}
          </List>

          <Text fontSize="md" lineHeight="tall">
            {profile.aboutExtra}
          </Text>
        </VStack>

        {/* Tools Section */}
        <VStack spacing={6} align="start">
          <Heading size="lg">
            My{' '}
            <Text color="brand.500" as="strong">
              Tools
            </Text>
          </Heading>

          <Flex direction="row" gap={4} justifyContent="start" wrap="wrap">
            {profile.tools.map((skill) => (
              <Skill skill={skill} key={skill} />
            ))}
          </Flex>
        </VStack>

        {/* Contact Section */}
        <Box
          bg={cardBg}
          p={8}
          borderRadius="xl"
          border="1px solid"
          borderColor={cardBorder}
          textAlign="center"
        >
          <VStack spacing={5}>
            <Heading size="lg">
              Feel free to{' '}
              <Text color="brand.500" as="strong">
                stay in touch
              </Text>
            </Heading>

            <Text fontSize="lg">{profile.contactPhoneNumber}</Text>
            <Text color="brand.500" fontSize="lg" fontWeight="500">
              {profile.contactEmail}
            </Text>

            <HStack spacing={6} justify="center" pt={2}>
              <Box
                as={LuLinkedin}
                onClick={goToLinkdin}
                boxSize={6}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  color: 'brand.500',
                  transform: 'scale(1.1)',
                }}
                aria-label="LinkedIn"
              />
              <Box
                as={LuMail}
                onClick={goToEmail}
                boxSize={6}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  color: 'brand.500',
                  transform: 'scale(1.1)',
                }}
                aria-label="Email"
              />
              <Box
                as={LuGithub}
                onClick={goToGithub}
                boxSize={6}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  color: 'brand.500',
                  transform: 'scale(1.1)',
                }}
                aria-label="GitHub"
              />
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;

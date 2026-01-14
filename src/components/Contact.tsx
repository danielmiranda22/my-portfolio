import {
  Box,
  Container,
  Heading,
  HStack,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import colors from '../utilities/colors';
import { LuLinkedin, LuMail } from 'react-icons/lu';

const Contact = () => {
  const { profile, loading } = ProfileData();

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
        'noreferrer,noopener'
      );
    }
  };

  // Loading state
  if (loading || !profile) {
    return (
      <Container maxW="3xl" id="contact">
        <Stack
          as={Box}
          textAlign="center"
          spacing={8}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 100, md: 20 }}
        >
          <VStack spacing={4}>
            <Skeleton height="30px" width="300px" />
            <Skeleton height="20px" width="200px" />
            <Skeleton height="20px" width="250px" />
            <HStack spacing={4}>
              <Skeleton height="40px" width="40px" borderRadius="md" />
              <Skeleton height="40px" width="40px" borderRadius="md" />
            </HStack>
          </VStack>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW="3xl" id="contact">
      <Stack
        as={Box}
        textAlign="center"
        spacing={8}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 100, md: 20 }}
      >
        <Stack spacing={4} as={Container} mx="3xl" textAlign="center">
          <Heading fontSize="xl">Feel free to stay in touch</Heading>
          <Text px={4} fontSize="lg">
            {profile.contactPhoneNumber}
          </Text>
          <Text color={colors['teal']} px={4} fontSize="lg">
            {profile.contactEmail}
          </Text>
          <HStack spacing={4} justify="center">
            <LuLinkedin
              onClick={goToLinkdin}
              className="base-icon rotate"
              style={{ cursor: 'pointer' }}
              aria-label="LinkedIn"
            />
            <LuMail
              onClick={goToEmail}
              className="base-icon rotate"
              style={{ cursor: 'pointer' }}
              aria-label="Email"
            />
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;

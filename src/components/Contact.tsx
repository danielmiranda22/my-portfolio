import {
  Box,
  Circle,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import SectionDivider from './SectionDivider';
import ProfileData from '../data/ProfileData';
import colors from '../utilities/colors';
import { LuLinkedin, LuMail } from 'react-icons/lu';

const Contact = () => {
  const profile = ProfileData();

  const goToLinkdin = () => {
    window.open(`${profile.contactLinkdin}`, '_blank', 'noreferrer,noopener');
  };

  const goToEmail = () => {
    window.open(
      `mailto:${profile.contactEmail}`,
      '_blank',
      'noreferrer,noopener'
    );
  };

  return (
    <Container maxW="3xl" id="contact">
      <Stack
        as={Box}
        textAlign={'center'}
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
            <LuLinkedin onClick={goToLinkdin} className="base-icon rotate" />
            <LuMail onClick={goToEmail} className="base-icon rotate" />
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;

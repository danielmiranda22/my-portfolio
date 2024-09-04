import {
  Box,
  Circle,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  theme,
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
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <SectionDivider sectionNumber="05" sectionText="Contact" />

        <Stack spacing={4} as={Container} mx="3xl" textAlign="center">
          <Heading fontSize="3xl">Feel free to stay in touch</Heading>
          <Text color={colors['gray600']} px={4} fontSize="xl">
            {profile.contactPhoneNumber}
          </Text>
          <Text color={colors['teal']} px={4} fontSize="xl">
            {profile.contactEmail}
          </Text>
          <HStack spacing={4} justify="center">
            <Circle border="1px" borderColor={colors['teal']} size="30px">
              <LuLinkedin onClick={goToLinkdin} />
            </Circle>
            <Circle border="1px" borderColor={colors['teal']} size="30px">
              <LuMail onClick={goToEmail} />
            </Circle>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;

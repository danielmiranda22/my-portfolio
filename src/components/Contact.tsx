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
    <Container maxW="4xl" id="contact">
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
            <Circle
              backgroundColor={colors['teal']}
              boxShadow="0 0 0 2px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)"
              size="30px"
              cursor="pointer"
            >
              <LuLinkedin onClick={goToLinkdin} color="white" />
            </Circle>
            <Circle
              backgroundColor={colors['teal']}
              boxShadow="0 0 0 2px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)"
              size="30px"
              cursor="pointer"
            >
              <LuMail onClick={goToEmail} color="white" />
            </Circle>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;

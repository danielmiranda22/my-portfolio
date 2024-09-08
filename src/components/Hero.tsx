import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import colors from '../utilities/colors';

const Hero = () => {
  const profile = ProfileData();

  return (
    <Container maxW="4xl" id="hero">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={7}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 52 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          {profile.heroCumpliment}
          <br />
          {profile.heroNameIntro}{' '}
          <Text as="span" color={colors['teal']}>
            {profile.heroName}
          </Text>
          <br />
          <Text
            as="span"
            color={colors['teal']}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
          >
            {profile.heroRole}
          </Text>
        </Heading>
        <Text
          color={colors['gray500']}
          fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
        >
          {profile.heroDescription}
        </Text>
      </Stack>
    </Container>
  );
};

export default Hero;

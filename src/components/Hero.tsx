import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import profileIMG from '../assets/profileIMG.webp';

const Hero = () => {
  const profile = ProfileData();

  return (
    <Container maxW="3xl" id="hero">
      <Stack
        as={Box}
        alignItems="center"
        textAlign="start"
        pb={{ base: 20, md: 36 }}
        pt={{ base: 20, md: 36 }}
        spacing={10}
      >
        <Box minW={'fit-content'}>
          <Image
            rounded="full"
            boxSize="350px"
            objectFit="cover"
            src={profileIMG}
            alt={profile.logo}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;

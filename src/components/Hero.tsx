import { Box, Container, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import ProfileData from '../data/ProfileData';
import profileIMG from '../assets/profileIMG.webp';

const Hero = () => {
  const { profile, loading } = ProfileData();

  if (loading || !profile) {
    return (
      <Container maxW="3xl" id="hero">
        <Stack
          as={Box}
          alignItems="center"
          textAlign="center"
          pb={{ base: 16, md: 20 }} // Reduced
          pt={{ base: 28, md: 36 }} // Keep higher (navbar offset)
          spacing={10}
        >
          <Skeleton borderRadius="full" boxSize="350px" />
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW="3xl" id="hero">
      <Stack
        as={Box}
        alignItems="center"
        textAlign="center"
        pb={{ base: 16, md: 20 }} // Reduced
        pt={{ base: 28, md: 36 }} // Keep higher (navbar offset)
        spacing={10}
      >
        <Fade direction="up" triggerOnce>
          <Box minW={'fit-content'}>
            <Image
              rounded="full"
              boxSize="350px"
              objectFit="cover"
              src={profileIMG}
              alt={profile.logo}
              style={{
                boxShadow: '0 20px 60px rgba(0, 128, 128, 0.3)',
                transition: 'transform 0.3s ease',
              }}
              _hover={{ transform: 'scale(1.05)' }}
            />
          </Box>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="medium"
            color="gray.600"
            _dark={{ color: 'gray.400' }}
          >
            {profile.title}
          </Text>
        </Fade>
      </Stack>
    </Container>
  );
};

export default Hero;

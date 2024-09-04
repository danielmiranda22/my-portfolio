import { Box, Button, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import colors from '../utilities/colors';

interface Props {
  size?: string;
}

const Home = ({ size }: Props) => {
  const profile = ProfileData();
  return (
    <Button className="nav-btn" variant="link" fontSize={size}>
      {profile.logo}
      <Text as="span" color={colors['teal']}>
        .
      </Text>
    </Button>
  );
};

export default Home;

import { Button, Text } from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';
import colors from '../utilities/colors';
import { SyntheticEvent } from 'react';

interface Props {
  size?: string;
  onClick: (e: SyntheticEvent) => void;
}

const Home = ({ size, onClick }: Props) => {
  const profile = ProfileData();
  return (
    <Button
      onClick={onClick}
      className="nav-btn Hero"
      variant="link"
      fontSize={size}
    >
      {profile.logo}
      <Text as="span" color={colors['teal']}>
        .
      </Text>
    </Button>
  );
};

export default Home;

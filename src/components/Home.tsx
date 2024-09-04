import { Button } from '@chakra-ui/react';
import ProfileData from '../data/ProfileData';

const Home = () => {
  const profile = ProfileData();
  return (
    <Button className="nav-btn" variant="link">
      {profile.logo}
    </Button>
  );
};

export default Home;

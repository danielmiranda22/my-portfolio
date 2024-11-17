import { Button, useColorMode } from '@chakra-ui/react';
import { LuMoonStar, LuSun } from 'react-icons/lu';

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="unstyled" onClick={toggleColorMode} className="nav-btn">
      {colorMode === 'light' ? (
        <LuMoonStar className="spin" />
      ) : (
        <LuSun className="spin" />
      )}
    </Button>
  );
};

export default ThemeButton;

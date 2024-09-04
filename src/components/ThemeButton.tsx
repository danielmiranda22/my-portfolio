import { Button, useColorMode } from '@chakra-ui/react';
import { LuMoonStar, LuSun } from 'react-icons/lu';

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button className="nav-btn" variant="link" onClick={toggleColorMode}>
      {colorMode === 'light' ? <LuMoonStar /> : <LuSun />}
    </Button>
  );
};

export default ThemeButton;

import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { CiMenuFries } from 'react-icons/ci';
import ThemeButton from './ThemeButton';
import Home from './Home';
import { SyntheticEvent } from 'react';

const NavItems = ['About', 'Experience', 'Projects', 'Resume', 'Contact'];

const NavBar = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navBg = useColorModeValue('whiteAlpha.800', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const goToTheSpecificSection = (
    e: SyntheticEvent,
    item: string | undefined,
  ) => {
    if (isOpen) onClose();

    const target = e.target as Element;
    const sectionMap: Record<string, string> = {
      Hero: '#hero',
      About: '#about',
      Experience: '#experience',
      Projects: '#projects',
      Resume: '#resume',
      Contact: '#contact',
    };

    const section = Object.keys(sectionMap).find((key) =>
      target.classList.contains(key),
    );

    if (section) {
      document.querySelector(sectionMap[section])?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backdropFilter="blur(12px)"
      bg={navBg}
      borderBottom="1px solid"
      borderColor={borderColor}
      py={3}
    >
      <Container maxW="4xl" display="flex" alignItems="center">
        {isLargerThanMD ? (
          <>
            <HStack flex={1}>
              <Home
                size="lg"
                onClick={(e) => goToTheSpecificSection(e, undefined)}
              />
            </HStack>
            <HStack spacing={6}>
              {NavItems.map((item) => (
                <Button
                  key={item}
                  onClick={(e) => goToTheSpecificSection(e, item)}
                  className={`nav-btn ${item}`}
                  variant="ghost"
                  size="sm"
                  fontWeight={400} // Lighter weight
                  fontSize="15px"
                  _hover={{
                    color: 'brand.500',
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                >
                  {item}
                </Button>
              ))}
              <ThemeButton />
            </HStack>
          </>
        ) : (
          <>
            <HStack w="100%" justifyContent="space-between">
              <Home
                size="md"
                onClick={(e) => goToTheSpecificSection(e, undefined)}
              />
              <HStack spacing={2}>
                <ThemeButton />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onOpen}
                  aria-label="Open menu"
                >
                  <CiMenuFries size={20} />
                </Button>
              </HStack>
            </HStack>

            <Drawer
              placement="right"
              onClose={onClose}
              isOpen={isOpen}
              size="xs"
            >
              <DrawerOverlay backdropFilter="blur(4px)" />
              <DrawerContent>
                <DrawerCloseButton color="brand.500" />
                <DrawerHeader pt={8}>
                  <Home
                    size="xl"
                    onClick={(e) => goToTheSpecificSection(e, undefined)}
                  />
                </DrawerHeader>
                <DrawerBody pt={12}>
                  <VStack spacing={6} align="stretch">
                    {NavItems.map((item) => (
                      <Button
                        key={item}
                        onClick={(e) => goToTheSpecificSection(e, item)}
                        className={`nav-btn ${item}`}
                        variant="ghost"
                        size="lg"
                        justifyContent="flex-start"
                        fontWeight={500}
                        _hover={{
                          color: 'brand.500',
                          bg: 'transparent',
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Container>
    </Flex>
  );
};

export default NavBar;

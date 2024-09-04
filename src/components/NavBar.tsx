import {
  Box,
  Button,
  Center,
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
import {
  LuAtSign,
  LuBriefcase,
  LuFile,
  LuKanban,
  LuLaptop2,
  LuMenu,
  LuText,
  LuUser,
} from 'react-icons/lu';
import { CiMenuFries } from 'react-icons/ci';
import ThemeButton from './ThemeButton';
import Home from './Home';
import colors from '../utilities/colors';
import { SyntheticEvent, useState } from 'react';

const NavItems = [
  { title: 'About', icon: <LuUser /> },
  { title: 'Experience', icon: <LuBriefcase /> },
  { title: 'Projects', icon: <LuLaptop2 /> },
  { title: 'Resume', icon: <LuFile /> },
  { title: 'Contact', icon: <LuAtSign /> },
];
const NavBar = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeIndex, setActiveIndex] = useState<string | undefined>(undefined);

  const goToTheSpecificSection = (
    e: SyntheticEvent,
    item: string | undefined
  ) => {
    if ((e.target as Element).classList.contains('Hero')) {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
    }

    if ((e.target as Element).classList.contains('About')) {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }

    if ((e.target as Element).classList.contains('Experience')) {
      document
        .querySelector('#experience')
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    if ((e.target as Element).classList.contains('Projects')) {
      document
        .querySelector('#projects')
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    if ((e.target as Element).classList.contains('Contact')) {
      document
        .querySelector('#contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveIndex(item);
  };

  return (
    <Flex
      bg={useColorModeValue(colors['gray100'], colors['gray900'])}
      justifyContent="center"
      direction={'row'}
      zIndex="sticky"
      position="fixed"
      as="header"
      w="100%"
      py={4}
    >
      {isLargerThanMD ? (
        <>
          <Container display="flex" maxW={'3xl'}>
            <HStack flexGrow={1}>
              <Home
                size="lg"
                onClick={(e) => goToTheSpecificSection(e, undefined)}
              />
            </HStack>
            <HStack spacing={7}>
              {NavItems.map((item, index) => (
                <Button
                  onClick={(e) => goToTheSpecificSection(e, item.title)}
                  key={index}
                  className={`nav-btn ${item.title}`}
                  leftIcon={item.icon}
                  variant="link"
                  color={activeIndex === item.title ? colors['teal'] : ''}
                >
                  {item.title}
                </Button>
              ))}
              <ThemeButton />
            </HStack>
          </Container>
        </>
      ) : (
        <>
          <HStack w="100%" direction="row">
            <HStack justifyContent="end" flexGrow={1}>
              <ThemeButton />
              <Button
                className="nav-btn navbar-toggle-btn"
                variant="link"
                leftIcon={<CiMenuFries />}
                onClick={onOpen}
              ></Button>
              <Drawer
                placement="right"
                onClose={onClose}
                isOpen={isOpen}
                size="xs"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton color={colors['teal']} />
                  <DrawerHeader alignSelf="center" my="100px">
                    <Home
                      size="xx-large"
                      onClick={(e) => goToTheSpecificSection(e, undefined)}
                    />
                  </DrawerHeader>
                  <DrawerBody alignContent="start">
                    <VStack spacing={7}>
                      {NavItems.map((item, index) => (
                        <Button
                          key={index}
                          className={`nav-btn ${item.title}`}
                          leftIcon={item.icon}
                          variant="link"
                        >
                          {item.title}
                        </Button>
                      ))}
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </HStack>
          </HStack>
        </>
      )}
    </Flex>
  );
};

export default NavBar;

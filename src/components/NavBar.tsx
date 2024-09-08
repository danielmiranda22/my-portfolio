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
import { CiMenuFries } from 'react-icons/ci';
import ThemeButton from './ThemeButton';
import Home from './Home';
import colors from '../utilities/colors';
import { SyntheticEvent, useState } from 'react';

const NavItems = ['About', 'Experience', 'Projects', 'Resume', 'Contact'];
const NavBar = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const goToTheSpecificSection = (
    e: SyntheticEvent,
    item: string | undefined
  ) => {
    if ((e.target as Element).classList.contains('Hero')) {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState('object or string', 'Title', '/' + '');
      return;
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

    if ((e.target as Element).classList.contains('Resume')) {
      document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
    }

    if ((e.target as Element).classList.contains('Contact')) {
      document
        .querySelector('#contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    window.history.pushState('object or string', 'Title', '/' + item);
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
          <Container display="flex" maxW={'4xl'}>
            <HStack flexGrow={1}>
              <Home
                size="lg"
                onClick={(e) => goToTheSpecificSection(e, undefined)}
              />
            </HStack>
            <HStack spacing={7}>
              {NavItems.map((item, index) => (
                <Button
                  onClick={(e) => goToTheSpecificSection(e, item)}
                  key={index}
                  className={`nav-btn ${item}`}
                  variant="link"
                >
                  {item}
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
                          onClick={(e) => goToTheSpecificSection(e, item)}
                          key={index}
                          className={`nav-btn ${item}`}
                          variant="link"
                        >
                          {item}
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

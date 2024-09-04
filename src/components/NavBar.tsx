import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
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

  return (
    <Flex
      justifyContent="center"
      direction={'row'}
      zIndex="sticky"
      position="fixed"
      as="header"
      w="100%"
      my={4}
    >
      {isLargerThanMD ? (
        <>
          <HStack flexGrow={1} maxW={'5xl'} gap={0}>
            <Home size="md" />
            <HStack ms="auto" spacing={7} justifyContent="end">
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
              <ThemeButton />
            </HStack>
          </HStack>
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
                    <Home size="xl" />
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

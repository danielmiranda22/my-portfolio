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
  LuLaptop2,
  LuMenu,
  LuUser,
} from 'react-icons/lu';
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
      direction={'row'}
      zIndex="sticky"
      position="fixed"
      as="header"
      w="100%"
      my={2}
      padding="10px"
    >
      {isLargerThanMD ? (
        <>
          <HStack justifyContent="space-between" flexGrow={1}>
            <Home />
            <HStack spacing={6}>
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
            </HStack>
            <ThemeButton />
          </HStack>
        </>
      ) : (
        <>
          <HStack w="100%" direction="row">
            <HStack justifyContent="end" flexGrow={1}>
              <ThemeButton />
              <Button
                className="nav-btn"
                variant="link"
                leftIcon={<LuMenu />}
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
                    <Home />
                  </DrawerHeader>
                  <DrawerBody alignContent="start">
                    <VStack spacing={6}>
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

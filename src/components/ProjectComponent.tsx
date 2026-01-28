import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import Project from '../models/Project';
import { LuArrowUpRight } from 'react-icons/lu';
import { FaGithub, FaWindowClose } from 'react-icons/fa';

interface Props {
  project: Project;
}

const ProjectComponent = ({ project }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  const visitProject = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="full"
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody
            padding={50}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              objectFit="contain"
              src={project.image}
              alt={project.title}
              maxH="80vh"
              cursor="pointer"
              onClick={onClose}
            />
          </ModalBody>

          <ModalFooter margin="auto">
            <Button onClick={onClose} gap={1}>
              <FaWindowClose />
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Fade direction="up">
        <Box
          p={6}
          bg={cardBg}
          borderRadius="xl"
          borderLeft="1px solid"
          borderColor={cardBorder}
          position="relative"
          transition="all 0.2s"
        >
          {project.status === 'in-progress' && (
            <Badge
              position="absolute"
              top={4}
              right={4}
              colorScheme="yellow"
              fontSize="sm"
              zIndex={1}
            >
              🚧 In Progress
            </Badge>
          )}

          <VStack spacing={4} align="stretch">
            {/* Project Image */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              _hover={{ opacity: 0.9 }}
              onClick={onOpen}
            >
              <Image
                objectFit="cover"
                src={project.image}
                alt={project.title}
                w="100%"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.02)' }}
              />
            </Box>

            {/* Project Info */}
            <VStack spacing={3} align="stretch" textAlign="left">
              <Heading size="md">{project.title}</Heading>
              <Text lineHeight="tall">{project.description}</Text>

              {project.sideNote && (
                <Text fontSize="sm" fontStyle="italic" color="gray.500">
                  {project.sideNote}
                </Text>
              )}

              {/* Action Buttons */}
              <HStack spacing={2} pt={2}>
                {project.links.map((link, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    leftIcon={
                      link.text.toLowerCase().includes('github') ? (
                        <FaGithub />
                      ) : (
                        <LuArrowUpRight />
                      )
                    }
                    onClick={() => visitProject(link.href)}
                  >
                    {link.text}
                  </Button>
                ))}
              </HStack>

              {/* Technology Badges */}
              <HStack spacing={2} wrap="wrap" pt={2}>
                {project.badges.map((badge) => (
                  <Badge key={badge.name} colorScheme={badge.colorScheme}>
                    {badge.name}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Fade>
    </>
  );
};

export default ProjectComponent;

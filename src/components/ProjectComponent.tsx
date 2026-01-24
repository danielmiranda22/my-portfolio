import {
  Badge,
  Button,
  Card,
  CardBody,
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
  useDisclosure,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import Project from '../models/Project';
import { LuArrowUpRight, LuMail } from 'react-icons/lu';
import { FaGithub, FaWindowClose } from 'react-icons/fa';

interface Props {
  project: Project;
}

const ProjectComponent = ({ project }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Card
          direction={{ base: 'column' }}
          overflow="hidden"
          position="relative"
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

          <Image
            objectFit="cover"
            src={project.image}
            alt={project.title}
            cursor="pointer"
            _hover={{ opacity: 0.9 }}
            onClick={onOpen}
          />

          <CardBody textAlign="left">
            <Heading size="md">{project.title}</Heading>
            <Text py={2}>{project.description}</Text>

            <Text py={2} fontSize="small" fontStyle="italic" color="gray.500">
              {project.sideNote}
            </Text>

            <HStack py={2}>
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

            <HStack pt={4} spacing={2}>
              {project.badges.map((badge) => (
                <Badge key={badge.name} colorScheme={badge.colorScheme}>
                  {badge.name}
                </Badge>
              ))}
            </HStack>
          </CardBody>
        </Card>
      </Fade>
    </>
  );
};

export default ProjectComponent;

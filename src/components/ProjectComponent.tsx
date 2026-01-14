import {
  Badge,
  Button,
  Card,
  CardBody,
  Circle,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import Project from '../models/Project';
import { LuArrowBigUp, LuArrowUpRight, LuMail } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';

interface Props {
  project: Project;
}

const ProjectComponent = ({ project }: Props) => {
  const visitProject = (href: String) => {
    window.open(`${href}`, '_blank', 'noreferrer,noopener');
  };
  return (
    <Fade direction="up">
      <Card
        key={project.title}
        direction={{ base: 'column' }}
        overflow={'hidden'}
        position="relative"
      >
        {/* Status badge for in-progress projects */}
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

        <Image objectFit="cover" src={project.image} />

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
                className="nav-btn"
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
  );
};

export default ProjectComponent;

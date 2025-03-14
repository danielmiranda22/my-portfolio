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
import colors from '../utilities/colors';
import { LuArrowBigUp, LuArrowUpRight, LuMail } from 'react-icons/lu';

interface Props {
  project: Project;
}

const ProjectComponent = ({ project }: Props) => {
  const visitGameHubProject = (href: String) => {
    window.open(`${href}`, '_blank', 'noreferrer,noopener');
  };
  return (
    <Fade direction="up">
      <Card
        key={project.title}
        direction={{ base: 'column' }}
        overflow={'hidden'}
      >
        <Image objectFit="cover" src={project.image} />

        <CardBody textAlign="left">
          <Heading size="md">{project.title}</Heading>
          <Text py={2}>{project.description}</Text>
          <Text py={2} fontSize="small">
            {project.sideNote}
          </Text>

          <HStack py={2}>
            {project.projectsDomains.map((projectDomain) => (
              <Button
                key={project.title}
                size="sm"
                leftIcon={<LuArrowUpRight />}
                className="nav-btn"
                onClick={() => visitGameHubProject(projectDomain.href)}
              >
                {projectDomain.text}
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

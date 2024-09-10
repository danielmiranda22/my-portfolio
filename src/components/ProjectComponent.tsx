import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import Project from '../models/Project';

interface Props {
  project: Project;
}

const ProjectComponent = ({ project }: Props) => {
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

          <HStack>
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

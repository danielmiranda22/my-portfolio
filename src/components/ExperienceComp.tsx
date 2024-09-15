import Experience from '../models/Experience';
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import colors from '../utilities/colors';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

interface Props {
  experience: Experience;
}

const ExperienceComp = ({ experience }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  let collapseAttr;

  if (!isExpanded) collapseAttr = { noOfLines: 5 };

  return (
    <Fade direction="up">
      <Card key={experience.company} size={'sm'}>
        <CardHeader>
          <Flex justifyContent={'space-between'} wrap={'wrap'}>
            <HStack textAlign="left">
              <Image src={experience.image} h={50} />
              <Box px={2} alignContent="left">
                <Text fontWeight={600}>{experience.company}</Text>
                <Text>{experience.role}</Text>
              </Box>
            </HStack>
            <Text px={2} fontWeight={300}>
              {experience.interval}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex>
            <List spacing={3} {...collapseAttr}>
              {experience.listItems.map((item, index) => (
                <ListItem key={index} textAlign="left">
                  <ListIcon
                    boxSize={4}
                    as={FaChevronRight}
                    color={colors['teal']}
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Flex>
          <Button
            size="sm"
            mt={4}
            className="nav-btn"
            variant="solid"
            onClick={() => setExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </CardBody>
        <CardFooter>
          <HStack spacing={2} wrap={'wrap'}>
            {experience.badges.map((bdg) => (
              <Badge key={bdg.name} colorScheme={bdg.colorScheme}>
                {bdg.name}
              </Badge>
            ))}
          </HStack>
        </CardFooter>
      </Card>
    </Fade>
  );
};

export default ExperienceComp;

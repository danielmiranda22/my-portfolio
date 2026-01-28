import Experience from '../models/Experience';
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

interface Props {
  experience: Experience;
}

const ExperienceComp = ({ experience }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  let collapseAttr;
  if (!isExpanded) collapseAttr = { noOfLines: 5 };

  return (
    <Fade direction="up">
      <Box
        p={6}
        bg={cardBg}
        borderRadius="xl"
        borderLeft="1px solid"
        borderColor={cardBorder}
        transition="all 0.2s"
      >
        <VStack spacing={4} align="stretch">
          {/* Header */}
          <Flex justifyContent="space-between" wrap="wrap" gap={3}>
            <HStack textAlign="left">
              <Image src={experience.image} h={50} borderRadius="md" />
              <Box px={2}>
                <Text fontWeight={600} fontSize="lg">
                  {experience.company}
                </Text>
                <Text color="gray.500">{experience.role}</Text>
              </Box>
            </HStack>
            <Text px={2} fontWeight={300} color="gray.500">
              {experience.interval}
            </Text>
          </Flex>

          {/* Experience Items */}
          <List spacing={3} {...collapseAttr}>
            {experience.listItems.map((item, index) => (
              <ListItem key={index} textAlign="left">
                <ListIcon boxSize={4} as={FaChevronRight} color="brand.500" />
                {item}
              </ListItem>
            ))}
          </List>

          {/* Show More/Less Button */}
          {experience.listItems.length > 5 && (
            <Button
              size="sm"
              mt={2}
              variant="ghost"
              onClick={() => setExpanded(!isExpanded)}
              alignSelf="flex-start"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
          )}

          {/* Technology Badges */}
          <HStack spacing={2} wrap="wrap" pt={2}>
            {experience.badges.map((bdg) => (
              <Badge key={bdg.name} colorScheme={bdg.colorScheme}>
                {bdg.name}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Fade>
  );
};

export default ExperienceComp;

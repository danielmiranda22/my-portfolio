import { Stack, HStack, Divider, Text, Container } from '@chakra-ui/react';
import React from 'react';
import colors from '../utilities/colors';

interface Props {
  sectionNumber: string;
  sectionText: string;
}

const SectionDivider = ({ sectionNumber, sectionText }: Props) => {
  return (
    <Container maxW="3xl">
      <HStack>
        <Text color={colors['teal']} fontWeight={600}>
          {sectionNumber}
        </Text>
        <Text fontWeight={600}>{sectionText}</Text>
      </HStack>
      <Divider />
    </Container>
  );
};

export default SectionDivider;

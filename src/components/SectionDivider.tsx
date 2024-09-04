import { Stack, HStack, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import colors from '../utilities/colors';

interface Props {
  sectionNumber: string;
  sectionText: string;
}

const SectionDivider = ({ sectionNumber, sectionText }: Props) => {
  return (
    <Stack align="center" direction="row">
      <HStack mx={4}>
        <Text color={colors['teal']} fontWeight={600}>
          {sectionNumber}
        </Text>
        <Text fontWeight={600}>{sectionText}</Text>
      </HStack>
      <Divider color={colors['gray600']} />
    </Stack>
  );
};

export default SectionDivider;

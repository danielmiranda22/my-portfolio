import {
  Box,
  Container,
  Divider,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props {
  sectionNumber: string;
  sectionText: string;
}

const SectionDivider = ({ sectionNumber, sectionText }: Props) => {
  const accentColor = useColorModeValue('brand.500', 'brand.400');
  const dividerColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="3xl" py={{ base: 8, md: 12 }}>
      <Heading
        as="h2"
        size="lg"
        mb={4}
        display="flex"
        alignItems="baseline"
        gap={3}
      >
        <Box
          as="span"
          fontSize="sm"
          fontWeight="normal"
          color={accentColor}
          fontFamily="mono"
        >
          {sectionNumber}.
        </Box>
        {sectionText}
      </Heading>
      <Divider borderColor={dividerColor} />
    </Container>
  );
};

export default SectionDivider;

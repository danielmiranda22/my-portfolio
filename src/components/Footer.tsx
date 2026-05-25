import {
  Box,
  Container,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box as="footer" py={8} borderTop="1px solid" borderColor={borderColor}>
      <Container maxW="3xl">
        <HStack justifyContent="space-between" flexWrap="wrap">
          <Text fontSize="sm" color={textColor}>
            © 2026 Alex Lambert. All rights reserved.
          </Text>
          <Text fontSize="sm" color={textColor}>
            Built with React, Chakra UI, and TypeScript.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;

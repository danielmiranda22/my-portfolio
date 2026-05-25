import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { LuBriefcase } from "react-icons/lu";
import ProfileData from "../data/ProfileData";
import { FaDownload } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Resume = () => {
  const { profile, loading } = ProfileData();

  const cardBg = useColorModeValue("gray.50", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const iconBg = useColorModeValue("brand.500", "brand.400");
  const headingColor = useColorModeValue("gray.700", "gray.300");

  const downloadCV = () => {
    fetch("content/cv.pdf")
      .then((resp) => {
        if (!resp.ok) throw new Error("Error fetching data");
        return resp.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv_alexlambert.pdf";
        alink.click();
      })
      .catch((error) => {
        console.error("Error downloading CV:", error);
        alert("Failed to download CV. Please try again.");
      });
  };

  if (loading || !profile) {
    return (
      <Container maxW="3xl" id="resume">
        <Stack
          as={Box}
          spacing={8}
          pb={{ base: 16, md: 20 }}
          pt={{ base: 4, md: 6 }}
        >
          <Skeleton height="150px" borderRadius="lg" />
          <Skeleton height="150px" borderRadius="lg" />
          <Skeleton height="150px" borderRadius="lg" />
        </Stack>
      </Container>
    );
  }

  const sections = [
    {
      title: profile.resumeHeaderOne,
      items: profile.resumeInfoOne,
    },
    {
      title: profile.resumeHeaderTwo,
      items: profile.resumeInfoTwo,
    },
    {
      title: profile.resumeHeaderThree,
      items: profile.resumeInfoThree,
    },
  ];

  return (
    <Container maxW="3xl" id="resume">
      <Stack
        as={Box}
        spacing={6}
        pb={{ base: 16, md: 20 }}
        pt={{ base: 4, md: 6 }}
      >
        {sections.map((section, index) => (
          <Fade direction="up">
            <Box
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="xl"
              borderLeft="1px solid"
              borderColor={cardBorder}
              transition="all 0.2s"
            >
              <HStack spacing={4} mb={4} alignItems="flex-start">
                <Box
                  p={3}
                  bg={iconBg}
                  borderRadius="md"
                  color="white"
                  flexShrink={0}
                >
                  <LuBriefcase size={20} />
                </Box>
                <Heading size="md" color={headingColor}>
                  {section.title}
                </Heading>
              </HStack>
              <VStack spacing={3} alignItems="flex-start" pl={14}>
                {section.items.map((item, idx) => (
                  <Text key={idx} fontSize="md" lineHeight="tall">
                    {item}
                  </Text>
                ))}
              </VStack>
            </Box>
          </Fade>
        ))}

        <Center mt={6}>
          <Button
            size="md"
            onClick={downloadCV}
            variant="outline"
            colorScheme="brand"
            leftIcon={<FaDownload />}
            _hover={{
              bg: "brand.500",
              color: "white",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            transition="all 0.2s"
          >
            Download CV
          </Button>
        </Center>
      </Stack>
    </Container>
  );
};

export default Resume;

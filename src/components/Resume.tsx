import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  theme,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { LuBriefcase } from 'react-icons/lu';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionDivider from './SectionDivider';
import colors from '../utilities/colors';
import ProfileData from '../data/ProfileData';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const profile = ProfileData();
  const { colorMode } = useColorMode();
  const downloadCV = () => {
    fetch('content/cv.pdf')
      .then((resp) => {
        if (!resp.ok) throw new Error('Error fetching data');
        return resp.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv_danielOliveira.pdf';
        alink.click();
      });
  };

  const timeLineCardStyle = {
    backgroundColor:
      colorMode === 'light' ? theme.colors.gray[200] : theme.colors.gray[900],
    color:
      colorMode === 'light' ? theme.colors.gray[900] : theme.colors.gray[200],
  };

  return (
    <Container maxW="3xl" id="resume">
      <Stack
        as={Box}
        textAlign="left"
        spacing={8}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 100, md: 20 }}
      >
        <VerticalTimeline
          lineColor={
            colorMode == 'light'
              ? theme.colors.gray[200]
              : theme.colors.gray[900]
          }
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={timeLineCardStyle}
            contentArrowStyle={{
              borderRight: `7px solid ${
                colorMode == 'light'
                  ? theme.colors.gray[200]
                  : theme.colors.gray[900]
              }`,
            }}
            iconClassName="ic-size"
            iconStyle={{ background: colors['teal'], color: '#fff' }}
            icon={<LuBriefcase />}
          >
            <VStack spacing={2} alignItems="left">
              <Text
                fontSize="2xl"
                as="span"
                color={theme.colors.gray[500]}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderOne}{' '}
              </Text>
              {profile.resumeInfoOne.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  className="vertical-timeline-element-title"
                >
                  {info}
                </Text>
              ))}
            </VStack>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={timeLineCardStyle}
            contentArrowStyle={{
              borderRight: `7px solid ${
                colorMode == 'light'
                  ? theme.colors.gray[200]
                  : theme.colors.gray[900]
              }`,
            }}
            iconClassName="ic-size"
            iconStyle={{ background: colors['teal'], color: '#fff' }}
            icon={<LuBriefcase />}
          >
            <VStack spacing={2} alignItems="left">
              <Text
                fontSize="2xl"
                as="span"
                color={theme.colors.gray[500]}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderTwo}{' '}
              </Text>

              {profile.resumeInfoTwo.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  className="vertical-timeline-element-title"
                >
                  {info}
                </Text>
              ))}
            </VStack>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={timeLineCardStyle}
            contentArrowStyle={{
              borderRight: `7px solid ${
                colorMode == 'light'
                  ? theme.colors.gray[200]
                  : theme.colors.gray[900]
              }`,
            }}
            iconStyle={{
              background: colors['teal'],
              color: '#fff',
            }}
            iconClassName="ic-size"
            icon={<LuBriefcase />}
          >
            <VStack spacing={2} alignItems="left">
              <Text
                fontSize="2xl"
                as="span"
                color={theme.colors.gray[500]}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderThree}{' '}
              </Text>

              {profile.resumeInfoThree.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  className="vertical-timeline-element-title"
                >
                  {info}
                </Text>
              ))}
            </VStack>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <Center>
          <Button
            size="sm"
            onClick={downloadCV}
            width={'fit-content'}
            _hover={{ color: 'teal' }}
            className="nav-btn"
            leftIcon={<FaDownload />}
            variant="solid"
          >
            Donwload CV
          </Button>{' '}
        </Center>
      </Stack>
    </Container>
  );
};

export default Resume;

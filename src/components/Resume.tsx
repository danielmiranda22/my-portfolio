import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
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
      colorMode === 'light' ? colors['gray100'] : colors['gray900'],
    color: colorMode === 'light' ? colors['gray900'] : colors['gray100'],
  };

  return (
    <Container maxW="4xl" id="resume">
      <Stack
        as={Box}
        textAlign="left"
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <SectionDivider sectionNumber="04" sectionText="Resume" />

        <VerticalTimeline
          lineColor={
            colorMode == 'light' ? colors['gray100'] : colors['gray900']
          }
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={timeLineCardStyle}
            contentArrowStyle={{
              borderRight: `7px solid ${
                colorMode === 'light' ? colors['gray100'] : colors['gray900']
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
                color={colors['gray500']}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderOne}{' '}
              </Text>
              {profile.resumeInfoOne.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  color={colors['gray600']}
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
                colorMode === 'light' ? colors['gray100'] : colors['gray900']
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
                color={colors['gray500']}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderTwo}{' '}
              </Text>

              {profile.resumeInfoTwo.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  color={colors['gray600']}
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
                colorMode === 'light' ? colors['gray100'] : colors['gray900']
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
                color={colors['gray500']}
                className="vertical-timeline-element-title"
              >
                {profile.resumeHeaderThree}{' '}
              </Text>

              {profile.resumeInfoThree.map((info, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  as="span"
                  color={colors['gray600']}
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
            onClick={downloadCV}
            width={'fit-content'}
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

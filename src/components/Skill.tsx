import { Card, CardBody, Tooltip } from '@chakra-ui/react';
import {
  SiAzuredevops,
  SiDiscord,
  SiGithubcopilot,
  SiMacos,
  SiPostman,
  SiVisualstudio,
  SiWindows,
} from 'react-icons/si';
import { TbBrandGit, TbBrandStackoverflow } from 'react-icons/tb';

interface Props {
  skill: string;
}

const Skill = ({ skill }: Props) => {
  return (
    <Tooltip label={skill} hasArrow>
      <Card
        className="simple-card"
        variant="elevated"
        size="sm"
        borderColor="brand.500"
      >
        <CardBody>
          {(() => {
            switch (skill) {
              case 'Visual Studio / VS Code':
                return <SiVisualstudio size="30px" />;
              case 'Git':
                return <TbBrandGit size="30px" />;
              case 'GitHub Copilot':
                return <SiGithubcopilot size="30px" />;
              case 'Azure':
                return <SiAzuredevops size="30px" />;
              case 'Postman':
                return <SiPostman size="30px" />;
              case 'Windows':
                return <SiWindows size="30px" />;
              case 'Mac':
                return <SiMacos size="30px" />;
              case 'StackOverflow':
                return <TbBrandStackoverflow size="30px" />;
              case 'Discord':
                return <SiDiscord size="30px" />;
              default:
                break;
            }
          })()}
        </CardBody>
      </Card>
    </Tooltip>
  );
};

export default Skill;

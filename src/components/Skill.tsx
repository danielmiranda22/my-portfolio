import { Card, CardBody } from '@chakra-ui/react';
import { FaJs } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';
import {
  SiAzuredevops,
  SiCsharp,
  SiCss3,
  SiDiscord,
  SiDotnet,
  SiHtml5,
  SiInsomnia,
  SiMacos,
  SiMicrosoftsqlserver,
  SiPostman,
  SiTypescript,
  SiVisualstudio,
  SiWindows,
  SiXamarin,
} from 'react-icons/si';
import {
  TbBrandGit,
  TbBrandGithub,
  TbBrandStackoverflow,
} from 'react-icons/tb';
import colors from '../utilities/colors';
interface Props {
  skill: string;
}

const Skill = ({ skill }: Props) => {
  return (
    <Card
      className="simple-card"
      variant="elevated"
      size="sm"
      borderColor={colors['teal']}
    >
      <CardBody>
        {(() => {
          switch (skill) {
            case 'VS':
              return <SiVisualstudio size="30px" />;
            case 'Postman':
              return <SiPostman size="30px" />;
            case 'Windows':
              return <SiWindows size="30px" />;
            case 'Discord':
              return <SiDiscord size="30px" />;
            case 'Mac':
              return <SiMacos size="30px" />;
            case 'StackOverflow':
              return <TbBrandStackoverflow size="30px" />;
            case 'Git':
              return <TbBrandGit size="30px" />;
            case 'Azure':
              return <SiAzuredevops size="30px" />;
            default:
              break;
          }
        })()}
      </CardBody>
    </Card>
  );
};

export default Skill;

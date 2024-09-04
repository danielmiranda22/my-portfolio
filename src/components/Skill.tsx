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
      variant="outline"
      size="md"
      borderColor={colors['teal']}
    >
      <CardBody>
        {(() => {
          switch (skill) {
            case 'C#':
              return <SiCsharp size="40px" />;
            case 'Dotnet':
              return <SiDotnet size="40px" />;
            case 'Xamarin':
              return <SiXamarin size="40px" />;
            case 'JavaScript':
              return <FaJs size="40px" />;
            case 'TypeScript':
              return <SiTypescript size="40px" />;
            case 'HTML':
              return <SiHtml5 size="40px" />;
            case 'CSS':
              return <SiCss3 size="40px" />;
            case 'reactJS':
              return <RiReactjsFill size="40px" />;
            case 'SQL':
              return <SiMicrosoftsqlserver size="40px" />;
            case 'VS':
              return <SiVisualstudio size="40px" />;
            case 'Postman':
              return <SiPostman size="40px" />;
            case 'Windows':
              return <SiWindows size="40px" />;
            case 'Discord':
              return <SiDiscord size="40px" />;
            case 'Mac':
              return <SiMacos size="40px" />;
            case 'StackOverflow':
              return <TbBrandStackoverflow size="40px" />;
            case 'Git':
              return <TbBrandGit size="40px" />;
            case 'Azure':
              return <SiAzuredevops size="40px" />;
            default:
              break;
          }
        })()}
      </CardBody>
    </Card>
  );
};

export default Skill;

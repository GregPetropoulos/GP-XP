import {
  SiExpo,
  SiTypescript,
  SiRedux,
  SiFigma,
  SiJavascript,
  SiReact,
  SiAppstore,
  SiApple,
  SiNodedotjs,
  SiAndroid,
  SiAndroidstudio,
  SiGit,
  SiGitlab,
  SiJest
} from 'react-icons/si';
import { RiJavaFill } from 'react-icons/ri';
import { DiSqllite } from 'react-icons/di';

const IconList = ({ isCore }: { isCore: boolean }) => {
  type ReactIcons = {
    iconCmp: any;
    style?: any;
    title?: string;
    size?: number;
  };

  const coreTechIcons: ReactIcons[] = [
    {
      iconCmp: SiReact,
      size: 32,
      style: { color: '#61DBFB' },
      title: 'React Native icon'
    },
    { iconCmp: SiExpo, size: 32, title: 'Expo Icon' },
    {
      iconCmp: SiJavascript,
      size: 32,
      style: { color: '#F7DF1E', backgroundColor: '#fff' },
      title: 'JavaScript icon'
    },
    {
      iconCmp: SiTypescript,
      size: 32,
      style: { color: '#007acc', backgroundColor: '#fff' },
      title: 'TypeScript icon'
    },
    {
      iconCmp: SiApple,
      size: 32,
      title: 'iOS icon'
    },
    {
      iconCmp: SiAndroid,
      size: 32,
      style: { color: '#3DDC84' },
      title: 'Android icon'
    },
    {
      iconCmp: SiRedux,
      size: 32,
      style: { color: '#fff', backgroundColor: '#593d88' },
      title: 'Redux icon'
    },
    {
      iconCmp: DiSqllite,
      size: 32,
      title: 'SQLite icon'
    },
    {
      iconCmp: SiJest,
      size: 32,
      style: { color: '#C21325' },
      title: 'Jest icon'
    },
    {
      iconCmp: SiAndroidstudio,
      size: 32,
      style: { color: '#669933' },
      title: 'Android Studio icon'
    },
    {
      iconCmp: SiAppstore,
      size: 32,
      style: { color: '#2072f3', backgroundColor: '#fff' },
      title: 'App Store icon'
    },
    {
      iconCmp: SiGit,
      size: 32,
      style: { color: '#264de4' },
      title: 'Git icon'
    },
    {
      iconCmp: SiGitlab,
      size: 32,
      style: { color: '#e24329' },
      title: 'GitLab icon'
    }
  ];
  const familiarTechIcons: ReactIcons[] = [
    {
      iconCmp: SiReact,
      size: 32,
      style: { color: '#61DBFB' },
      title: 'React icon'
    },
    {
      iconCmp: SiNodedotjs,
      size: 32,
      style: { color: '#215732' },
      title: 'Node.js icon'
    },
    {
      iconCmp: SiFigma,
      size: 32,
      style: { color: '#ff7262' },
      title: 'Figma icon'
    },
    {
      iconCmp: RiJavaFill,
      size: 32,
      style: { color: '#5382a1' },
      title: 'Java icon'
    }
  ];

  return (
    <div className='flex flex-wrap'>
      {isCore
        ? coreTechIcons.map((item, idx) => (
            <div key={idx} className='m-1 p-1.5 '>
              {
                <item.iconCmp
                  style={item.style}
                  size={item.size}
                  title={item.title}
                />
              }
            </div>
          ))
        : familiarTechIcons.map((item, idx) => (
            <div key={idx} className='m-1 p-1.5 '>
              {
                <item.iconCmp
                  style={item.style}
                  size={item.size}
                  title={item.title}
                />
              }
            </div>
          ))}
    </div>
  );
};

export default IconList;

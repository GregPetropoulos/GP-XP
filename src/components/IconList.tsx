import {
  SiMui,
  SiExpo,
  SiTypescript,
  SiRedux,
  SiGatsby,
  SiDaisyui,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiMongoose,
  SiFigma,
  SiContentful,
  SiUmbraco,
  SiStrapi,
  SiMantine,
  SiSass,
  SiJavascript,
  SiReact,
  SiAppstore,
  SiApple,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiAndroid,
  SiAndroidstudio,
  SiGit,
  SiGitlab,
  SiBootstrap
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { RiJavaFill, RiNextjsFill } from 'react-icons/ri';

const IconList = ({ isCore }: { isCore: boolean }) => {
  type ReactIcons = {
    iconCmp: any;
    style?: any;
    title?: string;
    size?: number;
  };

  // TODO CREATE CONSTANTS FOR THESE COLORS
  const coreTechIcons: ReactIcons[] = [
    {
      iconCmp: SiReact,
      size: 32,
      style: { color: '#61DBFB' },
      title: 'React icon'
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
      iconCmp: SiRedux,
      size: 32,
      style: { color: '#fff', backgroundColor: '#593d88' },
      title: 'Redux Toolkit UI Icon'
    },
    {
      iconCmp: SiAppstore,
      size: 32,
      style: { color: '#2072f3', backgroundColor: '#fff' },
      title: 'App Store icon'
    },
    { iconCmp: SiApple, size: 32, title: 'Apple icon' },
    {
      iconCmp: SiAndroid,
      size: 32,
      style: { color: '#3DDC84' },
      title: 'Android icon'
    },
    {
      iconCmp: SiAndroidstudio,
      size: 32,
      style: { color: '#669933' },
      title: 'Android Studio icon'
    },
    {
      iconCmp: SiGit,
      size: 32,
      style: { color: '#264de4' },
      title: 'Git icon'
    },
    { iconCmp: RiNextjsFill, size: 32, title: 'Nextjs Icon' },
    {
      iconCmp: SiHtml5,
      size: 32,
      style: { color: '#F06529', backgroundColor: '#fff' },
      title: 'HTML5 icon'
    },
    {
      iconCmp: SiCss3,
      size: 32,
      style: { color: '#264de4', backgroundColor: '#fff' },
      title: 'CSS3 icon'
    },
    {
      iconCmp: SiMongodb,
      size: 32,
      style: { color: '#4DB33D', backgroundColor: '#3F3E42' },
      title: 'MongoDB UI Icon'
    },
    {
      iconCmp: SiNodedotjs,
      size: 32,
      style: { color: '#215732' },
      title: 'Node.js icon'
    },
    {
      iconCmp: SiSass,
      size: 32,
      style: { color: '#CF649A' },
      title: 'Sass icon'
    },
    {
      iconCmp: SiMui,
      size: 32,
      style: { color: '#66b3ff' },
      title: 'Material UI Icon'
    },
    {
      iconCmp: SiTailwindcss,
      size: 32,
      style: { color: '#06b6d4' },
      title: 'Tailwind UI icon'
    },
    {
      iconCmp: SiDaisyui,
      size: 32,
      style: { color: '#1AD1A5' },
      title: 'DaisyUI icon'
    },
    {
      iconCmp: SiBootstrap,
      size: 32,
      style: { color: '#8312FA', backgroundColor: '#fff' },
      title: 'Bootstrap icon'
    },
    {
      iconCmp: SiGatsby,
      size: 32,
      style: { color: '#663399' },
      title: 'Gatsby icon'
    },
    {
      iconCmp: SiGitlab,
      size: 32,
      style: { color: '#e24329' },
      title: 'GitLab icon'
    },
    {
      iconCmp: VscVscode,
      size: 32,
      style: { color: '#0078d7' },
      title: 'VS Code icon'
    }
  ];
  const familiarTechIcons: ReactIcons[] = [
    { iconCmp: SiExpress, size: 32, title: 'Express icon' },
    {
      iconCmp: RiJavaFill,
      size: 32,
      style: { color: '#5382a1' },
      title: 'Java icon'
    },
    {
      iconCmp: SiMongoose,
      size: 32,
      style: { color: '#880000', backgroundColor: '#fff' },
      title: 'Mongoose icon'
    },
    {
      iconCmp: SiFigma,
      size: 32,
      style: { color: '#ff7262' },
      title: 'Figma icon'
    },
    {
      iconCmp: SiPostgresql,
      size: 32,
      style: { color: '#fff', backgroundColor: '#0064a5' },
      title: 'Postgresql icon'
    },
    {
      iconCmp: SiContentful,
      size: 32,
      style: { color: '#ffd75e' },
      title: 'Contentful icon'
    },
    {
      iconCmp: SiUmbraco,
      size: 32,
      style: { color: '	#214BAF', backgroundColor: '#fff' },
      title: 'Umbraco icon'
    },
    {
      iconCmp: SiStrapi,
      size: 32,
      style: { color: '#4945ff', backgroundColor: '#fff' },
      title: 'Strapi icon'
    },
    {
      iconCmp: SiMantine,
      size: 32,
      style: { color: '#339af0', backgroundColor: '#fff' },
      title: 'Mantine icon'
    }
  ];

  return (
    <>
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
    </>
  );
};

export default IconList;

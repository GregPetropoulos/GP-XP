// mobile images
import MobileSupportDesk from './mobile/original-mobile-support-desk.png';
import MobileITLogger from './mobile/original-mobile-it-logger.png';
import MobileDevSquad from './mobile/original-mobile-dev-squad.png';
// desktop images
// import DesktopSupportDesk from './desktop/original-desktop-support-desk.png';
// import DesktopITLogger from './desktop/original-desktop-it-logger.png';
// import DesktopDevSquad from './desktop/original-desktop-dev-squad.png';

const ProjectData = () => {
  return [
    {
      id: 0,
      projectName: 'Support Desk',
      mobileImage: MobileSupportDesk,
      //   desktopImage: DesktopSupportDesk,
      tech: '#React #Redux Toolkit #JWT #Node #Express #TailwindUI',
      youtube: 'https://youtu.be/JipI3YMuzqY',
      deployed: 'https://supportdesk-8110.onrender.com',
      github: 'https://github.com/GregPetropoulos/SupportDesk',
    },
    {
      id: 1,
      projectName: 'IT Logger',
      mobileImage: MobileITLogger,
      //   desktopImage: DesktopITLogger,
      tech: '#React #Redux #JWT #Express #Node #Materialize',
      youtube: 'https://www.youtube.com/watch?v=eAs24z7NNYE',
      deployed: 'https://it-support.onrender.com',
      github: 'https://github.com/GregPetropoulos/IT-Logger-App',
    },
    {
      id: 2,
      projectName: 'Dev Squad',
      mobileImage: MobileDevSquad,
      //   desktopImage: DesktopDevSquad,
      tech: '#React #Redux #JWT #Node #Express #CSS',
      youtube: 'https://youtu.be/4u0wONaI-7c',
      deployed: 'https://devsquad-g4t4.onrender.com',
      github: 'https://github.com/GregPetropoulos/Dev-Squad',
    },
  ];
};

export default ProjectData;

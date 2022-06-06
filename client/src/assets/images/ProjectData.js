import React from 'react';
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
      youtube: '',
      deployed: 'https://support-desk-services.herokuapp.com/',
      github: 'https://github.com/GregPetropoulos/SupportDesk'
    },
    {
      id: 1,
      projectName: 'IT Logger',
      mobileImage: MobileITLogger,
    //   desktopImage: DesktopITLogger,
      youtube: 'https://www.youtube.com/watch?v=eAs24z7NNYE',
      deployed: 'https://it-loggerv1.herokuapp.com/',
      github: 'https://github.com/GregPetropoulos/IT-Logger-App'
    },
    {
      id: 2,
      projectName: 'Dev Squad',
      mobileImage: MobileDevSquad,
    //   desktopImage: DesktopDevSquad,
      youtube: '',
      deployed: 'https://dev-talk-dev.herokuapp.com/',
      github: 'https://github.com/GregPetropoulos/Dev-Squad'
    }
  ];
};

export default ProjectData;

// mobile images
// import MobileSupportDesk from '../mobile/original-mobile-support-desk.png';
import MobileSupportDesk from '../images/mobile/original-mobile-support-desk.png';
import MobileITLogger from '../images/mobile/original-mobile-it-logger.png';
import MobileDevSquad from '../images/mobile/original-mobile-dev-squad.png';
// desktop images
// import DesktopSupportDesk from './desktop/original-desktop-support-desk.png';
// import DesktopITLogger from './desktop/original-desktop-it-logger.png';
// import DesktopDevSquad from './desktop/original-desktop-dev-squad.png';

const projectData = [
  {
    id: 0,
    projectName: 'Support Desk',
    mobileImage: MobileSupportDesk,
    //   desktopImage: DesktopSupportDesk,
    tech: '#React #Redux Toolkit #JWT #Node #Express #TailwindUI',
    youtube: 'https://youtu.be/JipI3YMuzqY',
    deployed: 'https://supportdesk-8110.onrender.com',
    github: 'https://github.com/GregPetropoulos/SupportDesk',
    description:'A (MERN) React Redux Toolkit full stack application with JWT authentication, CRUD operations, protected routes, and NoSQL database. Support Desk Services application is a customer facing product support system to engage with technicians and solve encountered issues'
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
    description:`A full stack react app with redux for state management. This is an Internal app for IT Department's to trouble-shoot and communicate with a system log that can be set to alert for high priority issues. Each is seen by all authenticated users and the authenticated user also has their own dashboard of only their own logs. Each log can be added, deleted, edited, filter`
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
    description:`This is a full stack MERN social media app for software developers to connect and exchange ideas. The App is rich in API calls using insomnia, Protected routes and endpoints with JSON Web Tokens, Redux for app state management and testing with Redux Chrome extension, creating actions and reducers for resources, creating a build script, secured keys, and deployed to Heroku with git commands`
  },
];

export default projectData;

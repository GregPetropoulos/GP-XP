
import supportDeskImageUrl from '../images/mobile/support-desk.webp';
import iTLoggerImageUrl from '../images/mobile/it-logger.webp';
import devSquadImageUrl from '../images/mobile/dev-squad.webp';
import ecommerceFashionImageUrl from '../images/mobile/ecommerce.png';//TODO needs work
import equineTherapyImageUrl from '../images/mobile/equine-therapy.png'
import conerstoneImageUrl from '../images/mobile/cornerstone.png'
import jhmImageUrl from '../images/mobile/jhm.png'

const projectData = [
  {
    id: 0,
    workType:'freelance',
    projectName: 'Support Desk',
    mobileImage: supportDeskImageUrl,
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express','JWT','MongoDB', 'TailwindUI'],
    youtube: 'https://youtu.be/JipI3YMuzqY',
    deployed: 'https://supportdesk-8110.onrender.com',
    github: 'https://github.com/GregPetropoulos/SupportDesk',
    description:' A Support Desk Services application is a customer facing product support system to engage with technicians and solve reported issues',
    year:'2022',
    type:'website'
  },
  {
    id: 1,
    workType:'freelance',
    projectName: 'IT Logger',
    mobileImage: iTLoggerImageUrl,
    tech: ['React', 'Redux','Node.js', 'Express','JWT','Materialize'],
    youtube: 'https://www.youtube.com/watch?v=eAs24z7NNYE',
    deployed: 'https://it-support.onrender.com',
    github: 'https://github.com/GregPetropoulos/IT-Logger-App',
    description:`Internal app for an IT Department to trouble-shoot and communicate with a system log and track alerts for high priority issues. Auth user's have a dashboard of logs with CRUD and filter functionality`,
    year:'2021',
    type:'website'

  },
  {
    id: 2,
    workType:'freelance',
    projectName: 'Dev Squad',
    mobileImage: devSquadImageUrl,
    tech: ['React', 'Redux','Node.js', 'Express','JWT','CSS'],
    youtube: 'https://youtu.be/4u0wONaI-7c',
    deployed: 'https://devsquad-g4t4.onrender.com',
    github: 'https://github.com/GregPetropoulos/Dev-Squad',
    description:`A social media app that utilizes the Github API to connect software developers and exchange ideas. Each user has CRUD operability to include a search, likes and dislikes`,
    year:'2021',
    type:'website'
  },
  {
    id: 3,
    workType:'freelance',
    projectName: 'Ecommerce Fashion Shop',
    mobileImage: ecommerceFashionImageUrl,
    tech: ['React','Redux Toolkit','Node.js','Express','Cookies','Paypal', 'Bootstrap'],
    youtube: '',
    deployed: 'https://fashionshopservice.onrender.com/',
    github: 'https://github.com/GregPetropoulos/FashionShop',
    description:`A custom e-commerce fashion shop focused on women's apparel. Created for a small business wanting to have more granular control with the likeness of a platform`,
    year:'2023',
    type:'website'
  },
  {
    id: 4,
    workType:'open source',
    projectName: 'Equine Therapy App',
    mobileImage: equineTherapyImageUrl,
    tech: ['React','Node.js', 'Express', 'Playwright', 'Cypress','SASS', 'Bootstrap',],
    youtube: '',
    deployed: 'https://equine-therapy.onrender.com/',
    github: 'https://github.com/istoga/Team-Alpha-Vets-Hackathon',
    description:` 1st place FallIn Hackathon winner for veterans mental health app. Connects veterans with locations of VA horse therapy services and connects horse therapy providers with VA funding.`,
    year:'2023',
    type:'website'

  },
  {
    id: 5,
    workType:'work',
    projectName: 'Cornerstone',
    mobileImage: conerstoneImageUrl,
    tech: ['React Native','C#','Cypress', 'Umbraco', 'SASS', 'Bootstrap'],
    youtube: '',
    deployed: 'https://www.sacornerstone.org/',
    github: '',
    description:`Cornerstone Church Legacy code migrated to a single React Native code base utilizing web view rendering and mobile app on the App store `,
    year:'2023',
    type:'website'
  },
  {
    id: 6,
    workType:'work',
    projectName: 'JHM',
    mobileImage: jhmImageUrl,
    tech: ['JavaScript', 'jQuery', 'C#', 'Umbraco', 'HTML', 'CSS', 'SASS', 'Bootstrap'],
    youtube: '',
    deployed: 'https://www.jhm.org/',
    github: '',
    description:` A custom website supports the ministries online presence, ecommerce, donations, sermons and mission`,
    year:'2023',
    type:'website'
  },
  {
    id: 7,
    workType:'work',
    projectName: 'Cornerstone App',
    mobileImage: conerstoneImageUrl,
    tech: ['React Native','Android','iOS',],
    youtube: '',
    deployed:'https://apps.apple.com/us/app/sa-cornerstone/id1664265654' ,
    github: '',
    description:` A mobile app that supports the ministries online presence, ecommerce, donations, sermons and mission`,
    year:'2023',
    type:'mobileApp'
  },

];

export default projectData;

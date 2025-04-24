import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: 'Greg Petropoulos React Native Developer Portfolio'
      },
      {
        // Google
        name: 'description',
        content:
          'Greg Petropoulos Portfolio website. Greg is a react native developer and senior frontend software engineer proficient in developing cross platform mobile apps and websites'
      },
      {
        name: 'author',
        content: 'Greg Petropoulos'
      },
      {
        name: 'keywords',
        content:
          'GregPetropoulos, gregpetropoulos, gregorios petropoulos, petropoulos, greg, @GregoriosPetro1,gregpetropoulos.dev, www.linkedin.com/in/greg-petropoulos, https://github.com/GregPetropoulos, Greg Petropoulos, React, React Native, frontend, senior software engineer, frontend developer, react developer, react.js, MERN,Express,Node.js,Gatsby,SASS,SCSS,CSS,HTML,CS3,HTML5,JavaScript JavaScript, UI,UX,web developer, mobile developer, mobile app, Software Developer, code,coder, programming,React, React Native, JavaScript, CSS3, HTM5L,Git,TypeScript, Bootstrap, Materialize, TailwindUI, Node.js, Express.js, MongoDB, Mongoose, AWS CloudWatch, Azure, GraphQL, Umbraco, Contentful, Strapi, Gatsby, React-Query, Cypress, Playwright,Github,NoSQL, MUI, yup, react-hook-form, jest,Expo, EAS, Tanstack, Android Studio, Xcode, appstore, playstore, firebase, mongodb, SQL, git, jira, agile, android, apple, mobile, responsive'
      },

      {
        //  FB
        property: 'og:title',
        key: 'og:title',
        content: 'Welcome Greg Petropoulos Frontend Portfolio'
      },
      {
        property: 'og:type',
        content: 'Website'
      },
      {
        property: 'og:locale',
        key: 'og:locale',
        content: 'en_US'
      },
      {
        property: 'og:description',
        key: 'og:description',
        content:
          'Greg Petropoulos Portfolio website. Greg is a react native developer and senior frontend software engineer proficient in developing cross platform mobile apps and websites'
      },
      {
        property: 'og:image',
        key: 'og:image',
        content: '../assets/profile-BW.jpg'
      },
      {
        property: 'og:url',
        content: 'https://gregpetropoulos.dev/'
      },
      {
        // TWITTER
        property: 'twitter:title',
        content: 'Greg Petropoulos React Native Developer Portfolio'
      },
      {
        property: 'twitter:description',
        content:
          'Greg Petropoulos Portfolio website. Greg is a react native developer and senior frontend software engineer proficient in developing cross platform mobile apps and websites'
      },
      {
        property: 'twitter:image',
        content: '../assets/profile-BW.jpg'
      }
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'canonical',
        href: window.location.href
      }
    ],
    scripts: [
      {
        src: 'https://www.google-analytics.com/analytics.js'
      }
    ]
  }),
  component: () => (
    <>
      <HeadContent />
      <NavBar />

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      <Footer />
    </>
  )
});

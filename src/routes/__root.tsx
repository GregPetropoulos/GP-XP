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
          'Greg Petropoulos Portfolio website. Greg is a react native senioer mobile developer proficient in developing cross platform mobile apps and websites'
      },
      {
        name: 'author',
        content: 'Greg Petropoulos'
      },
      {
        name: 'keywords',
        content:'GregPetropoulos, greg petropoulos, petropoulos'
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
          'Greg Petropoulos Portfolio website. Greg is a software engineer, mobile developer proficient in developing cross platform mobile apps and websites'
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

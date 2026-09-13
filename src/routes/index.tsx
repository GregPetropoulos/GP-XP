import { createFileRoute } from '@tanstack/react-router';
import Icons from '../components/Icons';
import Stats from '../components/Stats';
import SectionContainer from '../components/SectionContainer';
import TimeLine from '../components/TimeLine';
import gregImage from '../assets/profile-BW.jpg';
import ContentContainer from '../components/ContentContainer';
export const Route = createFileRoute('/')({ component: HomeIndexComponent });

function HomeIndexComponent() {
  return (
    <ContentContainer>
      {/* AVATAR */}
      <div className='avatar-group -space-x-8 justify-center w-full'>
        <div className='avatar flex justify-center '>
          <div className={'w-32  mask mask-hexagon'}>
            <img src={gregImage} alt=' Greg Petropoulos' />
          </div>
        </div>
      </div>
      {/* INTRO*/}
      <SectionContainer>
        <Icons />
        <p className='text-sm text-center my-2'>
          Most production work is proprietary in private GitLab, so my personal
          GitHub looks quiet.
        </p>
        <div className='sm:text-center'>
          <p>
            Hi, I'm Greg Petropoulos! I'm excited to share a bit about myself so
            you can get to know me better.
          </p>

          <p className='my-2 font-bold text-primary'>
            Senior React Native Engineer with 5+ years building and shipping
            production iOS and Android applications. Experienced owning mobile
            architecture and initiatives, integrating native platform
            capabilities, and delivering enterprise mobile software at scale.
          </p>
          <p className='my-2'>
            Day-job code lives in private company GitLab. This site is an
            overview of that work, not a public repo gallery. Products are
            confidential by design.
          </p>
        </div>
      </SectionContainer>
      {/* Skills Section */}
      <SectionContainer>
        <h2 className=' my-4 w-full text-center'>Tech Highlights</h2>
        <p>
          <span className='font-bold text-secondary'>
            React Native being my core foundation
          </span>
          .
        </p>
        <p className='font-bold mt-2'>Notable products I have worked on include:</p>
        <ul className='list-disc ml-2 my-2'>
          <li className='ml-6 my-2'>
            An IoT fleet app for web and mobile at [Confidential Corp].
          </li>

          <li className='ml-6 mb-2'>
            An entertainment web, mobile, and streaming app at [Confidential
            Corp].
          </li>
          <li className='ml-6 mb-2'>
            A government field and seized-property / asset tracking platform for
            web and mobile at [Confidential Corp].
          </li>
          <li className='ml-6 mb-2'>
            A fintech SaaS platform — supported developers with documentation,
            Jira, code review, security scans, and third-party onboarding.
          </li>
        </ul>
        <Stats />
        <p className='my-2'>
          <span className='font-bold text-secondary'>
            Led mobile architecture and development
          </span>{' '}
          for a DHS interagency field application serving 40,000+ users,
          delivering an offline-friendly iOS/Android experience with React
          Native/Expo and native Kotlin/Swift integrations, including Okta,
          AirWatch, Intune, enterprise MDM, and SSL certificate pinning to
          secure API traffic against Man-in-the-Middle attacks.
        </p>
        <p className='my-2'>
          <span className='font-bold text-secondary'>
            Built and improved the mobile delivery platform
          </span>
          , developing custom in-repo build and release scripting for
          environment-specific builds, dynamic version management, Apple
          signing, and enterprise distribution while troubleshooting
          authentication, API, deployment, and mobile platform issues across
          the application stack.
        </p>
        <p className='my-2'>
          <span className='font-bold text-secondary'>
            Shipped a production IoT mobile app at Samsara
          </span>{' '}
          reaching 200,000+ users, remediated 70 CVEs, and maintained ~80% test
          coverage.
        </p>
        <p className='my-2'>
          <span className='font-bold text-secondary'>
            Built shared React Native / React Native Web architecture at JHM
          </span>
          : a 75-component system serving 30,000+ users.
        </p>
        <p className='my-2'>
          <span className='font-bold text-secondary'>
            Led impactful migration initiatives
          </span>{' '}
          for a large-scale legacy Angular.js application to React 18 with Redux
          Toolkit, boosting efficiency and modernizing the codebase.
        </p>
      </SectionContainer>

      {/* TIMELINE */}
      <SectionContainer>
        <TimeLine />
      </SectionContainer>
    </ContentContainer>
  );
}

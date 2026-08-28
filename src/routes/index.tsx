import { createFileRoute } from '@tanstack/react-router';
import Icons from '../components/Icons';
import Stats from '../components/Stats';
import IconList from '../components/IconList';
import SectionContainer from '../components/SectionContainer';
import TimeLine from '../components/TimeLine';
import Collapse from '../components/Collapse';
import gregImage from '../assets/profile-BW.jpg';
import ContentContainer from '../components/ContentContainer';
import { CORE_SKILLS, FAMILIAR_SKILLS } from '../constants/constants';
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
        <div className='sm:text-center'>
          <p>
            Hi, I'm Greg Petropoulos! I'm excited to share a bit about myself so
            you can get to know me better.
          </p>
          
          <p className='my-2 font-bold text-primary'>
        Senior React Native Engineer with 5+ years building and shipping production iOS and Android applications.
Experienced owning mobile architecture and initiatives, integrating native platform capabilities, and
delivering enterprise mobile software at scale.
          </p>
        </div>
      </SectionContainer>
      {/* Skills Section */}
      <SectionContainer>
        <h2 className=' my-4 w-full text-center'>Tech Highlights</h2>
        <p>
           <span className='font-bold text-secondary'>React Native being my core foundation</span>.
        </p>
        <p className='font-bold mt-2'>Notable products I have worked on include:</p>
        <ul className='list-disc ml-2 my-2'>
          <li className='ml-6 my-2'>
            An IoT Driver and Fleet app for web and mobile at [Confidential Corp].
          </li>

          <li className='ml-6 mb-2'>
            An entertainment web, mobile and streaming app at [Confidential Corp].
          </li>
          <li className='ml-6 mb-2'>
            A government seized property and asset tracking platform for web
            and mobile [Confidential Corp].
          </li>
          <li className='ml-6 mb-2'>
            [Confidential] Saas Platform, supported developers with
            documentation, jira, code review, security scans and third party
            onboarding.
          </li>
        </ul>
        <Stats />
       <p className='my-2'><span className='font-bold text-secondary'>Led mobile architecture and development</span> for a DHS interagency field application serving 40,000+
users, delivering iOS/Android functionality with React Native/Expo and native Kotlin/Swift integrations,
including Okta, AirWatch, Intune, enterprise MDM, and SSL certificate pinning to secure API traffic
against Man-in-the-Middle attacks.
        </p>
        <p className='my-2'>
          <span className='font-bold text-secondary'>Built and improved the mobile delivery platform</span>, developing CI/CD automation for 
          environment-specific builds, dynamic version management, Apple signing, and enterprise
          distribution while troubleshooting authentication, API, deployment, and mobile platform
          issues across the application stack.</p>

        <p className='my-2'><span className='font-bold text-secondary'>Cross-platform architecture solutions</span>, seamlessly uniting mobile, web with a
          single, robust codebase.
        </p>
        <p className='my-2'><span className='font-bold text-secondary'>led impactful migration initiaives</span>for large-scale legacy
          Angular.js application to React v18 with Redux Toolkit, boosting
          efficiency and modernizing the codebase.
        </p>
        <p className='my-2'><span className='font-bold text-secondary'>I also strengthened security</span> by resolving 20,000 CVE's through strategic dependency management. Additionally, I've guided several hackathons, driving creativity and teamwork with React Native at the forefront.</p>
      </SectionContainer>
      <SectionContainer>
        <h2 className=' w-full text-center '>Tech Skills</h2>
        <h6 className=' w-full mb-2 mt-8'>Core Technologies</h6>
        <IconList isCore={true} />
        <Collapse title={'Skill List'} listOfItems={CORE_SKILLS} />
        <h6 className='w-full mb-2 mt-8'>Familiar Technologies</h6>
        <IconList isCore={false} />
        <Collapse title={'Skill List'} listOfItems={FAMILIAR_SKILLS} />
      </SectionContainer>

      {/* TIMELINE */}
      <SectionContainer>
        <TimeLine />
      </SectionContainer>
    </ContentContainer>
  );
}

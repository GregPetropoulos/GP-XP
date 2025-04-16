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
// todo Github presence

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
            Hi, I am Greg Petropoulos and I want to share general info so you
            can get to know me.
          </p>
          <p>
            Over the last several years I have acquired a set of web and mobile
            development skills in industry and have experience developing
            software solutions for small to large tech organizations .
          </p>
          {/* <p>
            I have experience developing software solutions for small to large
            tech organizations.
          </p> */}
        </div>
      </SectionContainer>
      {/* Skills Section */}
      <SectionContainer>
        <h2 className=' my-4 w-full text-center'>Tech Highlights</h2>
        <p>
          I excel in crafting production-grade React applications, with a strong
          emphasis on <span className='font-bold'>React Native</span> as a
          foundation of my expertise.
        </p>
        <p>Notable products include:</p>
        <ul className='list-disc ml-2 my-2'>
          <li className='ml-6 my-2'>
            An IoT Driver and Fleet app for web and mobile at Samsara.
          </li>

          <li className='ml-6 mb-2'>
            An entertainment web, mobile and streaming app at Global Evangelism,
            Inc.
          </li>
          <li className='ml-6 mb-2'>
            A government seized property and judicial tracking platform for web
            and mobile (DHS).
          </li>
          <li className='ml-6 mb-2'>
            Credit Union Banking Saas Platform, supported developers with
            documentation, jira, code review, security scans and third party
            onboarding.
          </li>
        </ul>
        <Stats />
        <p className='my-2'>
          I've led impactful initiatives, such as migrating a large-scale legacy
          Angular.js application to React v18 with Redux Toolkit, boosting
          efficiency and modernizing the codebase.
        </p>
        <p>
          My React Native proficiency shines in cross-platform architecture
          solutions, seamlessly uniting mobile, web, and TV deployments with a
          single, robust codebase.
        </p>
        <p className='my-2'>
          I also strengthened security by resolving 20,000 CVE's through
          strategic dependency management. Additionally, I've guided several
          hackathons, driving creativity and teamwork with React Native at the
          forefront.
        </p>
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

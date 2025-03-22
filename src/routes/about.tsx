import { createFileRoute } from '@tanstack/react-router';
import PageTitle from '../components/PageTitle';
import Icons from '../components/Icons';
import gregImage from '../assets/profile-BW.jpg';
import { CORE_SKILLS, FAMILIAR_SKILLS } from '../constants/constants';
export const Route = createFileRoute('/about')({ component: AboutComponent });
// Github presence
// history pics
// maps

function AboutComponent() {
  return (
    <>
      <PageTitle title='About' />
      <div className='border border-2 border-blue-600 flex flex-wrap justify-center w-full px-8'>
        <div className='avatar-group -space-x-8 justify-center w-full'>
          <div className='avatar flex justify-center '>
            <div className={'w-32  mask mask-hexagon'}>
              <img src={gregImage} alt=' Greg Petropoulos' />
            </div>
          </div>
        </div>
        <div className='max-w-3xl'>
          <section className='border border-2 border-red-600 flex flex-col w-full my-4'>
            <Icons />
          </section>
          <section className='border border-2 border-red-600 flex flex-col w-full items-center'>
            <p className='w-full'>
              Hi, I am Greg Petropoulos and I want to share general info so you
              can get to know me.
            </p>
            <p className='w-full'>
              Over the last several years I have acquired a set of web and
              mobile development skills in industry
            </p>
            <p className='w-full'>
              I have experience developing software solutions for small to large
              tech organizations
            </p>
          </section>

          {/* Skills Section */}
          <section className='border border-2 border-red-600 flex flex-col w-full my-4'>
            <h2 className='text-3xl '>Tech Skills</h2>
            <div className='flex w-full flex-wrap my-4'>
              <p className='font-bold w-full'>Core Technologies</p>
              {CORE_SKILLS.map((item, idx) => (
                <p className=' pr-2' key={item}>
                  {CORE_SKILLS.length - 1 === idx ? `${item}` : `${item}, `}
                </p>
              ))}
            </div>
            <div className='flex w-full flex-wrap'>
              <p className='font-bold w-full'>Familiar Technologies</p>
              {FAMILIAR_SKILLS.map((item, idx) => (
                <p className='pr-2' key={item}>
                  {FAMILIAR_SKILLS.length - 1 === idx ? `${item}` : `${item}, `}
                </p>
              ))}
            </div>
            <h2 className='text-3xl my-4 '>Tech Highlights</h2>
            <p>
              Pushed quality code to production for small 40k users base to
              large 20k enterprise customers
            </p>
            <p>
              Migrated React web to react native for mobile apps, web and TV
            </p>
            <p>Migrated Legacy Angular to React v18</p>
            <p>
              Reduced 20k CVE's with methodical package manager upgrades and
              resolutions
            </p>
          </section>

          <section className='border border-2 border-red-600 flex flex-col w-full my-4'>
            <h2 className='text-3xl'>Adventure</h2>
            <p>HotGates</p>
            <p>Fossil</p>
            <p>Marines</p>
            <p>Gold Maps</p>
          </section>
          <section className='border border-2 border-red-600 flex flex-col w-full my-4'>
            <h2 className='text-3xl'>Family</h2>
            <p>Building Unforgettable Moments</p>
          </section>
          <section className='border border-2 border-red-600 flex flex-col w-full my-4'>
            <h2 className='text-3xl'>Carousel</h2>
            <p>Cool Pics</p>
          </section>
        </div>
      </div>
    </>
  );
}

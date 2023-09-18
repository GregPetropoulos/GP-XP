import React, { Fragment } from 'react';
import Spinner from './Spinner';

const ProjectItems = ({ loading, data }) => {
  const { projectName, tech, mobileImage, github, deployed, youtube } = data;

  if (loading) return Spinner;

  return (
    <Fragment>
      <div className=' w-screen my-4 mx-3 flex justify-center items-center text-neutral-content gap-x-16 '>
        <div className='w-[230px] h-[420px] bg-transparent cursor-pointer group perspective'>
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div className='absolute backface-hidden border-2  w-full h-full'>
              <img
                src={mobileImage}
                alt='Project screenshot'
                className=' object-cover w-full h-full '
              />
            </div>

            {/* BACK  OF CARD */}
            <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-secondary overflow-hidden'>
              <div className='text-center flex flex-col items-center mt-3 h-full text-primary p-2'>
                <h1 className='text-2xl font-semibold pb-2 sm:text-3xl'>{projectName}</h1>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={youtube}
                  className='text-sm shadow-xl bg-primary-content px-4 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-2/3 delay-200 duration-1000 group-hover:bottom-2/3 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'
                >
                  Live Demo
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={deployed}
                  className=' text-sm  shadow-xl bg-primary-content px-6 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-1/2 delay-400 duration-1000 group-hover:bottom-1/2 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'
                >
                  Deployed
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={github}
                  className=' text-sm  shadow-xl bg-primary-content px-4 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-1/3 delay-600 duration-700 group-hover:bottom-1/3 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'
                >
                  Github
                </a>
                <div className='h-full flex flex-col justify-end mb-5'>
                  <p>{tech}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectItems;

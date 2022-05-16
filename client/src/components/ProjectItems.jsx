import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MobileSupportDesk from '../../assets/images/mobile/original-mobile-support-desk.png';
// import formatDate from '../utils/formatDate';

const ProjectItems = ({ loading }) => {
  if (loading) return <p>add spinner here</p>;

  return (
    <Fragment>
      <section className=' h-screen flex justify-center items-center gap-x-16 text-neutral-content'>
        <div className='w-[230px] h-[420px] bg-transparent cursor-pointer group perspective'>
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div className='absolute backface-hidden border-2  w-full h-full'>
              <img src={cardImage} className=' object-contain w-full h-full ' />
            </div>

            {/* BACK  OF CARD */}
            <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-secondary overflow-hidden'>
              <div className='text-center flex flex-col items-center mt-3 h-full text-primary p-2'>
                <h1 className='text-2xl font-semibold pb-2 sm:text-3xl'>
                  Support Desk
                </h1>
                <a
                 target='_blank'
                 rel='noopener noreferrer'
                  href='!#'
                  className='text-sm shadow-xl bg-primary-content px-4 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-2/3 delay-200 duration-1000 group-hover:bottom-2/3 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'>
                  Live Demo
                </a>
                <a
                 target='_blank'
                 rel='noopener noreferrer'
                  href='https://support-desk-services.herokuapp.com/'
                  className=' text-sm  shadow-xl bg-primary-content px-6 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-1/2 delay-400 duration-1000 group-hover:bottom-1/2 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'>
                  Deployed
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/GregPetropoulos/SupportDesk'
                  className=' text-sm  shadow-xl bg-primary-content px-4 py-2 font-semibold text-neutral-content rounded-full absolute -bottom-1/3 delay-600 duration-700 group-hover:bottom-1/3 scale-0 group-hover:scale-125 hover:outline hover:shadow-black'>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProjectItems;

import { Fragment } from 'react';
import Footer from './Footer';
import GregPetropoulosResume from '../assets/resume/React Full Stack--Greg Petropoulos_Resume_6.8.22.docx';
import gregImage from '../assets/images/mobile/mobile-profile-image.webp';
function HomeSection() {
  return (
    <Fragment>
      <div className='avatar flex justify-center '>
        <div className='w-32 mask mask-hexagon'>
          <a href={GregPetropoulosResume} download className=''>
            <img className='' src={gregImage} alt='Greg Petropoulos' />
          </a>
        </div>
      </div>
      <div className='flex justify-center grow-0'>
        <p className='text-center  p-3 sm:text-2xl sm:w-1/2'>
          Hi my name is Greg Petropoulos and I am a React Full Stack developer
          that brings ideas to life
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomeSection;

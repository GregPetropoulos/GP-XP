import GregPetropoulosResume from '../assets/resume/GregPetropoulosReactResume-9-4-23.pdf';
import gregImage from '../assets/images/mobile/mobile-profile-image.webp';

function HomeSection() {
  return (
    <>
      <div className='avatar flex justify-center '>
        <div className='w-32 mask mask-hexagon'>
          <a href={GregPetropoulosResume} download className=''>
            <img className='' src={gregImage} alt='Greg Petropoulos' />
          </a>
        </div>
      </div>
      <div className='flex justify-center grow-0'>
        <h1 className='text-center  p-3 sm:text-2xl sm:w-1/2'>
          Hi my name is Greg Petropoulos and I am a React Full Stack developer that brings ideas to
          life
        </h1>
      </div>
    </>
  );
}

export default HomeSection;

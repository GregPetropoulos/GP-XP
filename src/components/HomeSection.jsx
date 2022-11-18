import { Fragment, useState } from 'react';
import GregPetropoulosResume from '../assets/resume/Resume_10.20.22.docx';
import gregImage from '../assets/images/mobile/mobile-profile-image.webp';
import { HiHeart } from 'react-icons/hi';
import ReactGa from 'react-ga';

function HomeSection() {
  const [color, setColor] = useState('primary');
  const [heartScale, setHeartScale] = useState('');
  const onClickCounter = () => {
    setColor('red-500');
    setHeartScale('scale-150');
    ReactGa.event({
      category: 'Button',
      action: 'clicked the heart like button'
    });

    if (color.length > 0) {
      setTimeout(() => {
        // setColor('');
        setHeartScale('');
      }, [250]);
    }
  };

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
        <div className='flex flex-col justify-center align-middle'>
          <HiHeart
            size={20}
            className={`  btn animate-pulse btn-circle  text-center hover:${heartScale} text-${color}  hover:text-red-500`}
            onClick={onClickCounter}
          />
          <p className='ml-3 text-red-500'>Like</p>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeSection;

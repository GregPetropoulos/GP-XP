import { Fragment } from 'react';
import Footer from './Footer';
import GregPetropoulosResume from '../assets/resume/React_Full_Stack_Greg_Petropoulos_Resume_5.10.pdf';

function HomeSection({ img }) {
  return (
    <Fragment>
      <a href={GregPetropoulosResume} download className='my-pic-link'>
        <img className='profile-image' src={img} alt='Greg Petropoulos' />
      </a>
      <p>
        Hi my name is Greg Petropoulos and I enjoy bringing to life engaging
        websites and web applications to run across platforms and devices.
      </p>

      <Footer />
    </Fragment>
  );
}

export default HomeSection;

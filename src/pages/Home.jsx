import { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Meta from '../components/Meta';
import dressShopImage from '../assets/images/desktop/home-desktop.webp';
import GregPetropoulosResume from '../assets/resume/GregPetropoulosReactResume-9-4-23.pdf';
import gregImage from '../assets/images/mobile/mobile-profile-image.webp';
import Spinner from '../components/Spinner';

// TODO MAKE DEMO
//TODO SCROLL BACK TO TOP
const TopProjects = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <Spinner
        msg={`Thanks for clicking on it 😃. This is one of my favorite applications, it's hosted on render's free tier and could take 45-60 seconds to spin up the backend server, thanks for looking and a new tab will open shortly!👋`}
      />
    );
  }
  const handleLink = (externalUrl) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      return window.open(externalUrl, '_blank', 'noreferrer');
    }, 10000);
  };
  return (
    <section>
      <div className='flex flex-row justify-center w-full my-10'>
        <div className='card w-96 bg-base-100 shadow-xl image-full mx-10'>
          <figure>
            <img src={dressShopImage} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-primary'>Ecommerce App</h2>
            <p className='text-primary text-xs sm:text-base'>
              E-commerce Fashion shop Created with React, Redux Toolkit, Bootstrap, React-Bootstrap
              CSS, Express, Node.js, Mongodb, and Mongoose.
            </p>
            <div className='card-actions align-center justify-around text-primary w-full '>
              <a
                href='https://github.com/GregPetropoulos/FashionShop'
                target='_blank'
                rel='noreferrer'
                alt='github ecommerce app link'
                style={{ color: '#F4CBB2' }}
                className=' m-2 hover:scale-125 transition ease-in-out text-center'
              >
                <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
                <p>Code</p>
              </a>
              <a
                href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
                target='_blank'
                rel='noreferrer'
                alt='youtube live demo ecommerce app'
                style={{ color: '#FF0000' }}
                className=' m-2 hover:scale-125 transition ease-in-out text-center '
              >
                <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' />
                <p>Live Demo</p>
              </a>
              <button
                className='btn btn-sm m-2 hover:scale-125 transition ease-in-out text-center '
                onClick={() => handleLink('https://fashionshopservice.onrender.com/')}
              >
                Launch
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='red'
                  viewBox='0 0 24 24'
                  // stroke='currentColor'
                  stroke='red'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex justify-center  '>
        <Link
          to='/projects'
          alt='Projects Link'
          className='btn btn-outline btn-primary btn-xs text-xs sm:btn-lg '
        >
          See more projects
        </Link>
      </div>
    </section>
  );
};
const HomeSection = () => {
  return (
    <>
      <div className='avatar flex justify-center '>
        <div className='w-32 mask mask-hexagon'>
          <a href={GregPetropoulosResume} download alt='Resume download link'>
            <img src={gregImage} alt=' Greg Petropoulos' />
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
};
const IconSection = () => {
  return (
    <section>
      <div className=' flex flex-row-reverse flex-wrap  align-middle  text-center my-3 mx-20  justify-evenly sm:justify-center sm:flex-nowrap sm:flex-row'>
        <a
          href='https://github.com/GregPetropoulos'
          target='_blank'
          rel='noreferrer'
          alt='Github Icon Link'
          style={{ color: '#F4CBB2' }}
          className=' m-2 hover:scale-125 transition ease-in-out'
        >
          <FontAwesomeIcon className='icon' icon={faGithub} size='2x' />
        </a>

        <a
          href='https://www.linkedin.com/in/greg-petropoulos'
          target='_blank'
          rel='noreferrer'
          alt='Linkedin Icon Link'
          style={{ color: '#0e76a8' }}
          className=' m-2 hover:scale-125 transition ease-in-out'
        >
          <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
          target='_blank'
          rel='noreferrer'
          alt='Youtube Icon Link'
          style={{ color: '#FF0000' }}
          className=' m-2 hover:scale-125 transition ease-in-out '
        >
          <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' />
        </a>
        <a
          href='https://twitter.com/GregoriosPetro1'
          target='_blank'
          rel='noreferrer'
          alt='Twitter Icon Link'
          style={{ color: '#1DA1F2' }}
          className='m-2 hover:scale-125 transition ease-in-out '
        >
          <FontAwesomeIcon className='icon' icon={faTwitter} size='2x' />
        </a>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Meta />
      <div className='flex flex-col align-center'>
        <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;home&gt;</p>
        <HomeSection />
        <IconSection />
        <TopProjects />
        <About />
        <Contact />
        <Blog />
        <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;/home&gt;</p>
      </div>
    </>
  );
};

export default Home;

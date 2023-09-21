import HomeSection from '../components/HomeSection';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Section from '../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Meta from '../components/Meta';
import dressShopImage from '../assets/images/desktop/home-desktop.png';

// TODO MAKE DEMO
//TODO SCROLL BACK TO TOP
const TopProjects = () => {
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
            <div className='card-actions align-center justify-center text-primary w-full'>
              <a
                href='https://github.com/GregPetropoulos/FashionShop'
                target='_blank'
                rel='noreferrer'
                alt='github ecommerce app link'
                // className='btn btn-primary btn-sm'
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
                // className='btn btn-primary btn-sm'
                style={{ color: '#FF0000' }}
                className=' m-2 hover:scale-125 transition ease-in-out text-center '
              >
                <FontAwesomeIcon className='icon' icon={faYoutube} size='2x' />
                <p>Live Demo</p>
              </a>
              <button
                className='btn btn-sm m-2 hover:scale-125 transition ease-in-out text-center '
                onClick={() => window.open('https://fashionshopservice.onrender.com/', '_blank')}
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
        <Link to='/projects' className='  btn btn-outline btn-primary btn-xs text-xs sm:btn-lg '>
          See more projects
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Meta />
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;home&gt;</p>
      <HomeSection />
      <Section />
      <TopProjects />
      <About />
      <Contact />
      <Blog />
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;/home&gt;</p>
    </>
  );
};

export default Home;

import HomeSection from '../components/HomeSection';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Section from '../components/Section';
import dressShopImage from '../assets/images/desktop/home-desktop.png';
// import TopProjects from '../components/TopProjects'

// TODO MAKE DEMO
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
            <p className='text-primary'>
              E-commerce Fashion shop Created with React, Redux Toolkit, Bootstrap, React-Bootstrap
              CSS, Express, Node.js, Mongodb, and Mongoose.
            </p>
            <div className='card-actions align-center justify-center text-primary w-full'>
              <a
                href='https://github.com/GregPetropoulos/FashionShop'
                target='_blank'
                rel='noreferrer'
                alt='github ecommerce app link'
                className='btn btn-primary btn-sm'
              >
                Github
              </a>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                alt='youtube live demo ecommerce app'
                className='btn btn-primary btn-sm'
              >
                Live Demo
              </a>
              <a
                href='https://fashionshopservice.onrender.com/'
                target='_blank'
                rel='noreferrer'
                alt='fashion ecommerce deployed link'
                className='btn btn-primary btn-sm'
              >
                Dress Shop
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex-row w-full text-center justify-center'>
        <Link to='/projects' className=' w-1/3 btn  btn-outline btn-primary  '>
          See more projects
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* <main className='flex flex-col justify-center align-middle scrollbar-hide w-full'> */}
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

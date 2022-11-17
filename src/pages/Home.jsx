import HomeSection from '../components/HomeSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import MainFooter from '../components/MainFooter';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className='flex flex-col justify-center align-middle scrollbar-hide'>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;home&gt;</p>
      <HomeSection />
      <Footer />
      <Projects />
      <About />
      <Contact />
      <Blog />
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;/home&gt;</p>
      <MainFooter />
    </main>
  );
}

export default Home;

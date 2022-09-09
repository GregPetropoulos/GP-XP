import HomeSection from '../components/HomeSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import MainFooter from '../components/MainFooter';

function Home() {
  return (
    <main>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;home&gt;</p>
      <HomeSection />
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

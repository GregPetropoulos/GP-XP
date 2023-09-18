import HomeSection from '../components/HomeSection';
// import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Section from '../components/Section';
import TopProjects from '../components/TopProjects'

function Home() {
  return (
    <main className='flex flex-col justify-center align-middle scrollbar-hide'>
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;home&gt;</p>
      <HomeSection />
      <Section />
      <TopProjects/>
      {/* <Projects /> */}
      <About />
      <Contact />
      <Blog />
      <p className='ml-3 mt-3 text-xl text-secondary-content sm:text-3xl'>&lt;/home&gt;</p>
    </main>
  );
}

export default Home;

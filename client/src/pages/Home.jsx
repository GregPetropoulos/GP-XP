import {Fragment} from 'react';
import HomeSection from '../components/HomeSection';
// import Footer from "../components/Footer";
import ProfileImage from '../assets/images/mobile-profile-image.webp';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import MainFooter from '../components/MainFooter';

// import SVG from '../components/SVG';

function Home() {
  return (
<Fragment>

        <p style={{ fontSize: '1.4rem' }}>&lt;home&gt;</p>
      <HomeSection  img={ProfileImage} />
      <div className='home-buffer'></div>

      <Projects />
      <About />
      <Contact />
      <Blog />
        <p style={{ fontSize: '1.4rem' }}>&lt;/home&gt;</p>

      <MainFooter />
</Fragment>

  );
}

export default Home;

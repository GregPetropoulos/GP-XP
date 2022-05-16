import {Fragment} from 'react';
import HomeSection from '../components/HomeSection';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import MainFooter from '../components/MainFooter';

function Home() {
  return (
<Fragment>
        <p style={{ fontSize: '1.4rem' }}>&lt;home&gt;</p>
      <HomeSection/>
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

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import HomeSection from '../components/home/HomeSection';
// import Footer from "../components/Footer";
import ProfileImage from '../images/mobile-profile-image.webp';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import MainFooter from '../components/mainFooter/MainFooter';

// import SVG from '../components/SVG';

function Home() {
  return (
    <Container>
      <Row>
        <p style={{ fontSize: '1.4rem' }}>&lt;home&gt;</p>
      </Row>
      <HomeSection  img={ProfileImage} />
      <div className='home-buffer'></div>

      <Projects />
      <About />
      <Contact />
      <Blog />
      <Row>
        <p style={{ fontSize: '1.4rem' }}>&lt;/home&gt;</p>
      </Row>
      <MainFooter />
    </Container>
  );
}

export default Home;

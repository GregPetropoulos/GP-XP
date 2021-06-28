import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import HomeSection from "../components/HomeSection";
// import Footer from "../components/Footer";
import ProfileImage from '../images/profile-image.jpeg'

function Home() {
  return (
    <Container>
      <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.4rem'}}>&lt;home&gt;</p>
      </Row>
      <HomeSection
      img={ProfileImage}
      />
      <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.4rem'}}>&lt;/home&gt;</p>
      </Row>
    </Container>
  );
}

export default Home;

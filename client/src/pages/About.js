import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import AboutSection from '../components/about/AboutSection';

const About = () => {
  return (
    <Container>
    <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.4rem',color:'#08a7ce'}}>&lt;about&gt;</p>
      </Row>
    <AboutSection/>
    <Row>
        <p style={{fontFamily:'monospace',fontSize:'1.4rem',color:'#08a7ce'}}>&lt;/about&gt;</p>
      </Row>
    </Container>
  );
};

export default About;

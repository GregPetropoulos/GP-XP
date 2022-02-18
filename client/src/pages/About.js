import React from 'react';
import AboutSection from '../components/about/AboutSection';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <Row>
        <p
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}>
          &lt;about&gt;
        </p>
      </Row>
      <AboutSection />
      <Row>
        <p
          style={{
            fontSize: '1.4rem',
            color: '#08a7ce'
          }}>
          &lt;/about&gt;
        </p>
      </Row>
    </Container>
  );
};

export default About;

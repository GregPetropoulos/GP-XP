import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css"

const AboutSection = () => {
        
  return (
    <Container className='about-container'>
      <Row>
        <Col md={6}>
          <p className='about-1p'>
            Hi, I am a Full Stack Web Developer with a background in geologic
            sciences and I am always eager to learn and collaborate. As a sleuth
            at heart, I find discovery in many aspects of life rewarding. Web
            development is exciting and provides an opportunity to create value
            and utilize my strengths in ground-truthing an expected outcome.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p className='about-2p'>
            I am well versed in MongoDB, Express, React, Node, M.E.R.N. stack
            and foundational Javascript, jQuery, HTML5 CSS3.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <p className='about-3p'>
            Over the last year I have created several web applications with the
            key methods in mind for rich user experiences.
          </p>
        </Col>
       </Row> 
      <p className='about-4p'>
        Outside of web development I enjoy spending time with my family, working
        out, and exploring old treasure maps.
      </p>
      <button className='resume-buttton'>
      <Link to="url">Resume</Link>
      </button>
    </Container>
  );
};
export default AboutSection;

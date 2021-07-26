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
      {/* <button className='resume-button btn btn-lg'>
      <a href="https://drive.google.com/file/d/1lkxDTr-djCSyYnHw-P0MXyWJ_ADinmcY/view?usp=sharing">Resume</a>
      </button> */}
      <Row>
        <Col md={4} sm={5} xs={5} className='resume-col'>
        <a href='https://drive.google.com/file/d/1lkxDTr-djCSyYnHw-P0MXyWJ_ADinmcY/view?usp=sharing'>Resume</a>
        </Col>
        </Row>
    </Container>
  );
};
export default AboutSection;

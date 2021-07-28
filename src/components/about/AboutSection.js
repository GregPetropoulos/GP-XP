import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './style.css';

const AboutSection = () => {
  return (
    <Container className='about-container'>
      <Row>
        <Col lg={10} md={8} className='about-main-column'>
          <Row>
            <Col md={12}>
              <p className='about-1p'>
                I am a Full Stack Web Developer with a background in geologic
                sciences and I am always eager to learn and collaborate. A
                sleuth at heart, I find discovery and fulfillment rewarding and
                web development offers an opportunity to create value and
                utilize my strengths. My approach is simple: write out the logic
                with pen & paper, code, test, and refactor.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p className='about-2p'>
                I have created several web applications with the key methods in
                mind for rich user experiences.
              </p>
            </Col>
            {/* </Row> */}

            <Row>
              <Col lg={6} md={6} sm={6}>
                animation place holder{' '}
              </Col>
              <Col lg={6} md={6} sm={6}>
                <p className='about-3p'>
                  <ul>
                    <li>
                      Pragmatic design and development of responsive web
                      applications
                    </li>
                    <li>
                      Stylistic and functional UI/UX, use of multiple API’s, and
                      third party integrations & database
                    </li>
                    <li>Models, Views, Controllers paradigm</li>
                    <li>Outcome oriented and AGILE project management.</li>
                  </ul>
                  I am proficient in the MERN stack (MongoDB, Express,Node
                  React) JavaScript, HTML, CSS and I am open to learning new
                  technologies.
                </p>
              </Col>
            </Row>
          </Row>
          <p className='about-4p'>
            Over the last year I have held a fulltime non tech job, raised a
            family, purchased a home, and dug deep into my bootcamp training and
            look forward to the future.
            <p></p>
            Outside of web development I enjoy spending time with my family,
            working out, and exploring old treasure maps.
          </p>
          <p className='quote-andre'>
            {' '}
            - "If you create an act, you create a habit. If you create a habit,
            you create a character. If you create a character, you create a
            destiny." - Andre Maurois
          </p>
          {/* <button className='resume-button btn btn-lg'>
       href="https://drive.google.com/file/d/1lkxDTr-djCSyYnHw-P0MXyWJ_ADinmcY/view?usp=sharing">Resume</a>
    </button> */}
          <Row>
            <Col lg={12} className='about-link-col'>
              <a
                href='https://drive.google.com/file/d/1FuUjC_w0HsBAZolm9R874VtqrpUHHmUz/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                Resume
              </a>
              {/* </Col> */}
              {/* <Col className='about-link-col'> */}
              <a
                href='https://github.com/GregPetropoulos'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutSection;

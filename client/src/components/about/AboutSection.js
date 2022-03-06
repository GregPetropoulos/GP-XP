import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faMdb,
  faReact,
  faNodeJs,
  faSketch,
  faCodepen,
  faConfluence,
  faPushed
} from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  return (
    <Row>
      <Col lg={12} className='about-main-column'>
        {/* <Row style={{textAlign:'center'}}> */}
        <Col md={12} xs={12}>
          {/* ---- */}
          <Row className='about-skills-icon-row'>
            <p>
              I am proficient in the MERN stack (MongoDB, Express,Node React)
              JavaScript, HTML, CSS and I am open to learning new technologies.
            </p>
            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faReact}
                size='6x'
                color='#61DBFB'
                style={{ background: '#000' }}
                fixedWidth
              />
            </Col>
            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faJs}
                size='6x'
                color='#f0db4f'
                style={{ background: '#323330' }}
                fixedWidth
              />
            </Col>
            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faMdb}
                size='6x'
                color='#E8E7D5'
                style={{ background: '#3FA037' }}
                fixedWidth
              />
            </Col>
            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faNodeJs}
                size='6x'
                color='#3c873a'
                style={{ background: '#303030' }}
                fixedWidth
              />
            </Col>

            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faHtml5}
                size='5x'
                color='#E34C26'
                style={{ background: '#EBEBEB' }}
                fixedWidth
              />
            </Col>

            <Col className='col-skills-icon'>
              <FontAwesomeIcon
                className='skill-icon'
                icon={faCss3}
                size='5x'
                color='#2965f1'
                style={{ background: '#EBEBEB' }}
                fixedWidth
              />
            </Col>
          </Row>
          <p className='about-1p'>
            I am a Full Stack Web Developer with a background in geologic
            sciences and always eager to learn and collaborate.
            <br />A sleuth at heart, I find discovery and fulfillment rewarding
            and web development offers an opportunity to create value and
            utilize my strengths. I am React/JavaScript enthusiast and enjoy
            bringing applications to life.
          </p>
        </Col>
        {/* </Row> */}
        <Row>
          <Col lg={12}>
            <p className='about-2p'>
              I have created several web applications with the key methods in
              mind for rich user experiences.
            </p>
          </Col>

          <Row>
            {/* <Col lg={6} md={6} sm={6}>
              animation place holder{' '}
            </Col> */}
            <Col lg={6} md={6}>
              <span className='about-3p'>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faCodepen}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Pragmatic design and development of responsive web
                    applications
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faSketch}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Stylistic and functional UI/UX, use of multiple API’s, and
                    third party integrations & database
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faConfluence}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Models, Views, Controllers paradigm
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className='bullet-icon'
                      icon={faPushed}
                      size='2x'
                      color='#fff'
                      style={{ background: '#000' }}
                      fixedWidth
                    />
                    Outcome oriented and AGILE project management.
                  </li>
                </ul>
                {/* I am proficient in the MERN stack (MongoDB, Express,Node React)
                JavaScript, HTML, CSS and I am open to learning new
                technologies. */}
              </span>
            </Col>
          </Row>
        </Row>
        <p className='about-4p'>
          {/* Over the last year I have held a fulltime non tech job, raised a
          family, purchased a home, and dug deep into my bootcamp training and
          look forward to the future. */}
          <span></span>
          Outside of web development I enjoy spending time with my family,
          working out, cooking, and exploring old treasure maps.
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
        <Row
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Col lg={3} md={3} sm={4} xs={6} className='resume-button'>
            {/* <button > */}
            <a
              href='https://drive.google.com/file/d/1oOQa5YWcDl-4gf1AxJJkiAfwREmD4yr1/view?usp=sharing'
              target='_blank'
              rel='noreferrer'>
              Resume
            </a>
            {/* </button> */}
          </Col>
          <Col lg={3} md={3} sm={4} xs={6} className='github-button'>
            {/* <button > */}
            <a
              href='https://github.com/GregPetropoulos'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            {/* </button> */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default AboutSection;

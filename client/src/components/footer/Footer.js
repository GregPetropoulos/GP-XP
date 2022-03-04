import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container className='main-footer-container'>
      <Row className='icon-row'>
        <Col className='icon-col'>
          <a
            href='https://github.com/GregPetropoulos'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#F4CBB2' }}>
            <FontAwesomeIcon className='icon' icon={faGithub} size='4x' />
          </a>

          <a
            href='https://linkedin.com/in/greg-petropoulos-b186b954'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#0e76a8' }}>
            <FontAwesomeIcon className='icon' icon={faLinkedin} size='4x' />
          </a>
        </Col>
        <Col className='icon-col'>
          <a
            href='https://www.youtube.com/channel/UC59RJzqORuQTPjePJVml-pw'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#FF0000' }}>
            <FontAwesomeIcon className='icon' icon={faYoutube} size='4x' />
          </a>
          <a
            href='https://twitter.com/GregoriosPetro1'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#1DA1F2' }}>
            <FontAwesomeIcon className='icon' icon={faTwitter} size='4x' />
          </a>
        </Col>
        {/* 
        <Col lg={12} className='contact-footer'>
          gregpetropoulos@yahoo.com
        </Col> */}
      </Row>
    </Container>
  );
};

export default Footer;

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './style.css';
import Footer from '../footer/Footer';

function HomeSection({ img }) {
  return (
    <Container className='home-container'>
      <Row>
        <Col className='home-main-column'>
        <Col className='profile-box'>
          {/* <br/> */}
          <a
            href='https://github.com/GregPetropoulos'
            target='_blank'
            rel='noreferrer'
            className='my-pic-link'
            >
            <img className='profile-image' src={img} alt='Greg Petropoulos' />
          </a>
        </Col>
        <Col className=''>
          <p className='home-description'>
            Hi my name is Greg Petropoulos and I create engaging websites and
            web applications to run across platforms and devices.
          </p>
        </Col>
        <Footer>

        </Footer>
            </Col>
      </Row>
    </Container>
  );
}

export default HomeSection;

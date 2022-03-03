import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../footer/Footer';
import Container from 'react-bootstrap/esm/Container';

function HomeSection({ img }) {
  return (
    <Container>
      <Row>
        <Col className='home-main-column' >
          <Row className='profile-box'>
            {/* <br/> */}
            <a
              href='https://drive.google.com/file/d/1oOQa5YWcDl-4gf1AxJJkiAfwREmD4yr1/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='my-pic-link'>
              <img className='profile-image' src={img} alt='Greg Petropoulos' />
            </a>
          </Row>
          <Col className=''>
            <p className='home-description'>
              Hi my name is Greg Petropoulos and I create engaging websites and
              web applications to run across platforms and devices.
            </p>
          </Col>
        </Col>
          <Footer />
      </Row>
    </Container>
  );
}

export default HomeSection;

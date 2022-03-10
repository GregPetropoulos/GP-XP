import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import GregPetropoulosResume from '../../resume/GregPetropoulosResume-3-3-22.docx';

function HomeSection({ img }) {
  return (
    <Container>
      <Row>
        <Col className='home-main-column'>
          <Row className='profile-box'>
            <a href={GregPetropoulosResume} download className='my-pic-link'>
              <img className='profile-image' src={img} alt='Greg Petropoulos' />
            </a>
          </Row>
          <Row className='home-description'>
            <Col xl={8} lg={12} md={12}>
              <p>
                Hi my name is Greg Petropoulos and I enjoy bringing to life
                engaging websites and web applications to run across platforms
                and devices.
              </p>
            </Col>
          </Row>
        </Col>

        <Footer />
      </Row>
    </Container>
  );
}

export default HomeSection;

import React from "react";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "./style.css";


function HomeSection({img}) {
  return (
    <Container className= 'home-container'>
    <Row>
      <Col className='profile-box col-6'>
        {/* <br/> */}
      <a href ='https://github.com/GregPetropoulos' target='_blank' rel="noreferrer"className='d-flex justify-content-center'>
        <img className ='profile-image' src={img} alt="Greg Petropoulos" />
        </a>
        </Col> 
        <Col className='text-wrapper col-6'>
        <p className= 'text-justify align-bottom m-0 p-0 d-flex' >
           Hi my name is Greg Petropoulos and I create engaging websites and web
        applications to run across platforms and devices.
        </p>
      </Col>
    
    </Row>
    </Container>
  );
}

export default HomeSection;

